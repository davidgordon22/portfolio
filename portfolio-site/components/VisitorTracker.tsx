"use client";

import { useEffect } from "react";

type VisitEvent =
  | "page_view"
  | "engaged"
  | "section_view"
  | "scroll_depth"
  | "link_click";

type ClientEvent = {
  event: VisitEvent;
  sessionId: string;
  path: string;
  referrer: string;
  timezone: string;
  screen: {
    width: number;
    height: number;
  };
  section?: string;
  depth?: number;
  destination?: string;
};

const SESSION_KEY = "dg_portfolio_session";

function getSessionId() {
  let sessionId = sessionStorage.getItem(SESSION_KEY);

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }

  return sessionId;
}

function cleanReferrer() {
  if (!document.referrer) return "";

  try {
    const url = new URL(document.referrer);
    return `${url.protocol}//${url.host}${url.pathname}`;
  } catch {
    return "";
  }
}

function cleanDestination(anchor: HTMLAnchorElement) {
  try {
    const url = new URL(anchor.href, window.location.href);
    return `${url.protocol}//${url.host}${url.pathname}${url.hash}`;
  } catch {
    return anchor.getAttribute("href")?.slice(0, 300) ?? "";
  }
}

function sendEvent(event: ClientEvent) {
  const body = JSON.stringify(event);

  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: "application/json" });
    if (navigator.sendBeacon("/api/visit", blob)) return;
  }

  void fetch("/api/visit", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    // Analytics should never interfere with the portfolio experience.
  });
}

export default function VisitorTracker() {
  useEffect(() => {
    const sessionId = getSessionId();
    const base = {
      sessionId,
      path: window.location.pathname,
      referrer: cleanReferrer(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
      screen: {
        width: window.screen.width,
        height: window.screen.height,
      },
    };

    sendEvent({ event: "page_view", ...base });

    const engagedKey = `${SESSION_KEY}_engaged_${sessionId}`;
    let engagedSent = sessionStorage.getItem(engagedKey) === "1";

    const engagementTimer = window.setTimeout(() => {
      if (!engagedSent && document.visibilityState === "visible") {
        engagedSent = true;
        sessionStorage.setItem(engagedKey, "1");
        sendEvent({ event: "engaged", ...base });
      }
    }, 15_000);

    const sentDepths = new Set<number>();
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const depth = Math.round((window.scrollY / scrollable) * 100);
      for (const threshold of [25, 50, 75, 90]) {
        if (depth >= threshold && !sentDepths.has(threshold)) {
          sentDepths.add(threshold);
          sendEvent({ event: "scroll_depth", depth: threshold, ...base });
        }
      }
    };

    const handleClick = (mouseEvent: MouseEvent) => {
      const target = mouseEvent.target as Element | null;
      const anchor = target?.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      sendEvent({
        event: "link_click",
        destination: cleanDestination(anchor),
        ...base,
      });
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.35) continue;

          const section = entry.target as HTMLElement;
          const heading = section.querySelector("h2")?.textContent?.trim();
          const label = (section.id || heading || "unnamed-section").slice(0, 120);

          sendEvent({ event: "section_view", section: label, ...base });
          sectionObserver.unobserve(section);
        }
      },
      { threshold: [0.35] },
    );

    document.querySelectorAll("main > section").forEach((section) => {
      sectionObserver.observe(section);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleClick, true);

    return () => {
      window.clearTimeout(engagementTimer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick, true);
      sectionObserver.disconnect();
    };
  }, []);

  return null;
}
