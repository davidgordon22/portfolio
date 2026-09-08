import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type VisitEvent = {
  event?: string;
  sessionId?: string;
  path?: string;
  referrer?: string;
  timezone?: string;
  screen?: { width?: number; height?: number };
  section?: string;
  depth?: number;
  destination?: string;
};

const BOT_PATTERN =
  /bot|crawler|spider|crawl|slurp|headless|phantom|preview|facebookexternalhit|linkedinbot|twitterbot|discordbot|slackbot|whatsapp|telegrambot|hunt-bot|uptime|monitor/i;

function clean(value: unknown, max = 300) {
  return typeof value === "string" ? value.slice(0, max) : "";
}

function locationFrom(request: NextRequest) {
  return {
    city: decodeURIComponent(request.headers.get("x-vercel-ip-city") || ""),
    region: request.headers.get("x-vercel-ip-country-region") || "",
    country: request.headers.get("x-vercel-ip-country") || "",
    latitude: request.headers.get("x-vercel-ip-latitude") || "",
    longitude: request.headers.get("x-vercel-ip-longitude") || "",
  };
}

function watchLocationMatch(city: string, region: string) {
  const configured = (process.env.VISITOR_WATCH_LOCATIONS || "")
    .split(";")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);

  if (!configured.length) return false;

  const fullLocation = `${city}, ${region}`.toLowerCase();
  return configured.some(
    (location) => fullLocation.includes(location) || city.toLowerCase() === location,
  );
}

async function sendSlackAlert(message: string) {
  const webhook = process.env.SLACK_VISITOR_WEBHOOK_URL;
  if (!webhook) return;

  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text: message }),
      cache: "no-store",
    });
  } catch (error) {
    console.error("visitor_analytics_slack_error", error);
  }
}

export async function POST(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";

  // Reject obvious crawlers, link previewers, monitoring tools, and scanners.
  if (!userAgent || BOT_PATTERN.test(userAgent)) {
    return NextResponse.json({ ok: true, ignored: "automated-client" });
  }

  let body: VisitEvent;
  try {
    body = (await request.json()) as VisitEvent;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const allowedEvents = new Set([
    "page_view",
    "engaged",
    "section_view",
    "scroll_depth",
    "link_click",
  ]);

  const event = clean(body.event, 30);
  if (!allowedEvents.has(event)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const geo = locationFrom(request);
  const watchMatch = watchLocationMatch(geo.city, geo.region);
  const label = process.env.VISITOR_WATCH_LABEL || "watched location";

  const record = {
    type: "portfolio_visit",
    timestamp: new Date().toISOString(),
    event,
    sessionId: clean(body.sessionId, 80),
    path: clean(body.path, 200),
    referrer: clean(body.referrer, 300),
    timezone: clean(body.timezone, 100),
    screen: {
      width: Number(body.screen?.width) || null,
      height: Number(body.screen?.height) || null,
    },
    section: clean(body.section, 120),
    depth: Number(body.depth) || null,
    destination: clean(body.destination, 300),
    geo,
    watchMatch,
    userAgent: userAgent.slice(0, 300),
  };

  // Structured Vercel log. Deliberately does not store the raw visitor IP.
  console.info("portfolio_visit", JSON.stringify(record));

  const alertAllHumans = process.env.VISITOR_ALERT_ALL_HUMANS === "true";
  const notableEvent = event === "engaged" || event === "link_click";

  if (notableEvent && (watchMatch || alertAllHumans)) {
    const location = [geo.city, geo.region, geo.country].filter(Boolean).join(", ") || "Unknown location";
    const heading = watchMatch
      ? `:eyes: Possible ${label} portfolio visit`
      : ":eyes: Engaged portfolio visitor";

    const detail = event === "link_click" && record.destination
      ? `Clicked: ${record.destination}`
      : "Stayed on the site for at least 15 seconds";

    await sendSlackAlert(
      `${heading}\nLocation: ${location}\nPage: ${record.path || "/"}\n${detail}\nSession: ${record.sessionId.slice(0, 8) || "unknown"}`,
    );
  }

  return NextResponse.json({ ok: true });
}
