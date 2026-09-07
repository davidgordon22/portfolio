import Image from "next/image";
import { inter, plexMono } from "../fonts";

const metrics = [
  {
    index: "01",
    value: "$20M+",
    label: "Collected through an automated settlement flow",
  },
  {
    index: "02",
    value: "100M+ rows",
    label: "Modeled in a Snowflake platform built from scratch",
  },
  {
    index: "03",
    value: "40+ users",
    label: "On internal tools used daily across two companies",
  },
];

export default function SwissHero() {
  return (
    <div
      className={`${inter.className} min-h-screen bg-[#0B0B0C] text-[#E9E7E2] selection:bg-[#E9E7E2] selection:text-[#0B0B0C]`}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <header className="flex items-center justify-between border-b border-white/15 py-5">
          <span className="text-[15px] font-medium tracking-[-0.01em]">
            David Gordon
          </span>
          <span className={`${plexMono.className} text-[12px] text-[#8B867D]`}>
            Portfolio — 2026
          </span>
        </header>

        <section className="grid grid-cols-1 gap-12 border-b border-white/15 py-16 md:grid-cols-12 md:gap-8 md:py-20">
          <div className="md:col-span-7">
            <p
              className={`${plexMono.className} border-l border-white/25 pl-4 text-[12px] leading-[1.6] text-[#8B867D]`}
            >
              Business Systems Engineer
              <br />
              Automation · Data infrastructure · Internal software
            </p>

            <h1 className="mt-10 text-[clamp(2.6rem,5.4vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.035em]">
              I replace manual work with systems people actually trust.
            </h1>

            <p className="mt-8 max-w-[52ch] text-[16px] leading-[1.75] text-[#A5A099]">
              I build the automation, data platforms, and internal tools that
              operations teams depend on — the kind that quietly run revenue
              instead of generating another dashboard nobody opens.
            </p>

            <div
              className={`${plexMono.className} mt-12 flex flex-wrap gap-x-10 gap-y-4 text-[13px]`}
            >
              <a
                href="#"
                className="border-b border-white/30 pb-1 transition-colors hover:border-white"
              >
                Selected work
              </a>
              <a
                href="#"
                className="border-b border-white/30 pb-1 text-[#A5A099] transition-colors hover:border-white hover:text-[#E9E7E2]"
              >
                Résumé (PDF)
              </a>
              <a
                href="#"
                className="border-b border-white/30 pb-1 text-[#A5A099] transition-colors hover:border-white hover:text-[#E9E7E2]"
              >
                dgordon102202@gmail.com
              </a>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <div className="relative aspect-3/4 w-full overflow-hidden bg-[#141416]">
              <Image
                src="/profile.png"
                alt="David Gordon on a snow-covered ridgeline"
                fill
                priority
                className="object-cover grayscale contrast-110"
              />
            </div>
            <p
              className={`${plexMono.className} mt-4 text-[12px] leading-[1.6] text-[#8B867D]`}
            >
              Fig. 1 — Somewhere cold, high, or underwater.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3">
          {metrics.map((metric, i) => (
            <div
              key={metric.index}
              className={`py-10 sm:pr-8 ${
                i > 0
                  ? "border-t border-white/15 sm:border-t-0 sm:border-l sm:pl-8"
                  : ""
              }`}
            >
              <p
                className={`${plexMono.className} text-[12px] text-[#6F6A63]`}
              >
                {metric.index}
              </p>
              <p className="mt-4 text-[28px] font-medium tracking-[-0.03em]">
                {metric.value}
              </p>
              <p className="mt-2 max-w-[30ch] text-[13px] leading-[1.6] text-[#8B867D]">
                {metric.label}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
