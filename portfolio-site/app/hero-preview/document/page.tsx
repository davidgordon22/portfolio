import Image from "next/image";
import { inter, newsreader } from "../fonts";

const spec = [
  ["Role", "Business Systems Engineer"],
  ["Focus", "Automation, data infrastructure, internal software"],
  ["Stack", "Python · Snowflake · Streamlit · REST APIs"],
  ["Shipped", "Otter Dolphin · Argo Delivery · No Rep Snacks"],
];

export default function DocumentHero() {
  return (
    <div
      className={`${inter.className} min-h-screen bg-[#FBFAF8] text-[#121110] selection:bg-[#121110] selection:text-[#FBFAF8]`}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="flex items-center justify-between py-5 text-[12px] text-[#7A736B]">
          <span>Portfolio</span>
          <span>2026</span>
        </div>

        <h1
          className={`${newsreader.className} border-t border-[#121110]/20 pt-6 text-[clamp(3.25rem,8.5vw,7rem)] leading-[0.92] tracking-[-0.03em]`}
        >
          David Gordon
        </h1>

        <section className="grid grid-cols-1 gap-10 border-t border-[#121110]/20 py-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <div className="relative aspect-square w-full overflow-hidden bg-[#EDEAE4]">
              <Image
                src="/profile.png"
                alt="David Gordon on a snow-covered ridgeline"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-5">
            <p
              className={`${newsreader.className} text-[26px] leading-[1.35] tracking-[-0.01em]`}
            >
              I replace manual work with systems people actually trust.
            </p>
            <p className="mt-5 max-w-[44ch] text-[15px] leading-[1.75] text-[#57514A]">
              Most of what I build starts as somebody&apos;s spreadsheet, inbox,
              or twelve-person process. It ends as software that runs without
              anyone thinking about it. When I am not working, I am usually
              somewhere cold, high, or underwater.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#"
                className="bg-[#121110] px-5 py-2.5 text-[13px] text-[#FBFAF8] transition-opacity hover:opacity-85"
              >
                Selected work
              </a>
              <a
                href="#"
                className="text-[13px] underline decoration-[#121110]/30 underline-offset-[6px] hover:decoration-[#121110]"
              >
                Résumé (PDF)
              </a>
            </div>
          </div>

          <dl className="md:col-span-4">
            {spec.map(([term, value]) => (
              <div
                key={term}
                className="grid grid-cols-3 gap-4 border-b border-[#121110]/12 py-3 text-[13px] first:border-t first:border-[#121110]/12"
              >
                <dt className="text-[#7A736B]">{term}</dt>
                <dd className="col-span-2 leading-[1.55]">{value}</dd>
              </div>
            ))}
            <div className="grid grid-cols-3 gap-4 border-b border-[#121110]/12 py-3 text-[13px]">
              <dt className="text-[#7A736B]">Contact</dt>
              <dd className="col-span-2">
                <a
                  className="underline decoration-[#121110]/30 underline-offset-[5px] hover:decoration-[#121110]"
                  href="mailto:dgordon102202@gmail.com"
                >
                  dgordon102202@gmail.com
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section className="grid grid-cols-1 border-t border-[#121110]/20 sm:grid-cols-3">
          {[
            ["$20M+", "Collected through automated settlement"],
            ["100M+ rows", "Modeled in a Snowflake platform"],
            ["40+ users", "On internal tools, used daily"],
          ].map(([value, label], i) => (
            <div
              key={value}
              className={`py-8 sm:pr-8 ${
                i > 0
                  ? "border-t border-[#121110]/12 sm:border-t-0 sm:border-l sm:border-[#121110]/12 sm:pl-8"
                  : ""
              }`}
            >
              <p
                className={`${newsreader.className} text-[32px] tracking-[-0.02em]`}
              >
                {value}
              </p>
              <p className="mt-2 text-[13px] leading-[1.6] text-[#7A736B]">
                {label}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
