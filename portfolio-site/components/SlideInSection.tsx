"use client";

import { useEffect, useRef, useState } from "react";

type SlideInSectionProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
};

export default function SlideInSection({
  children,
  direction = "left",
  className = "",
}: SlideInSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentSection);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(currentSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const hiddenPosition =
    direction === "left" ? "-translate-x-24" : "translate-x-24";

  return (
    <div
      ref={sectionRef}
      className={`
        transition-all duration-700 ease-out
        ${
          isVisible
            ? "opacity-100 translate-x-0"
            : `opacity-0 ${hiddenPosition}`
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}