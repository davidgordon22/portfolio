import Image from "next/image";
import { inter, newsreader } from "../fonts";

export default function EditorialHero() {
  return (
    <div
      className={`${inter.className} min-h-screen bg-[#F3F1EC] text-[#16130F] selection:bg-[#16130F] selection:text-[#F3F1EC]`}
    >
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">
        <header className="flex items-baseline justify-between border-b border-[#16130F]/15 py-6">
          <span className={`${newsreader.className} text-lg`}>
            David Gordon
          </span>
          <nav className="flex gap-8 text-[13px] text-[#6A625A]">
            <a className="underline-offset-4 hover:text-[#16130F] hover:underline" href="#">
              Work
            </a>
            <a className="underline-offset-4 hover:text-[#16130F] hover:underline" href="#">
              Approach
            </a>
            <a className="underline-offset-4 hover:text-[#16130F] hover:underline" href="#">
              Contact
            </a>
          </nav>
        </header>

        <section className="grid grid-cols-1 gap-12 pb-16 pt-16 md:grid-cols-12 md:gap-10 md:pt-24">
          <div className="md:col-span-7">
            <p className="text-[13px] text-[#6A625A]">
              Business Systems Engineer
            </p>

            <h1
              className={`${newsreader.className} mt-6 text-[clamp(2.75rem,5.6vw,4.5rem)] leading-[1.03] tracking-[-0.02em]`}
            >
              I replace manual work with systems people{" "}
              <em className="italic">actually trust</em>.
            </h1>

            <p className="mt-8 max-w-[46ch] text-[17px] leading-[1.7] text-[#4A433C]">
              Automation, data infrastructure, and internal software for
              operations that have outgrown their spreadsheets — and the vendors
              who promised to fix them.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-7">
              <a
                href="#"
                className="bg-[#16130F] px-6 py-3 text-[14px] text-[#F3F1EC] transition-opacity hover:opacity-85"
              >
                Selected work
              </a>
              <a
                href="#"
                className="text-[14px] underline decoration-[#16130F]/30 underline-offset-[6px] transition-colors hover:decoration-[#16130F]"
              >
                Résumé (PDF)
              </a>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <div className="relative aspect-4/5 w-full overflow-hidden bg-[#E4E0D8]">
              <Image
                src="/profile.png"
                alt="David Gordon on a snow-covered ridgeline"
                fill
                priority
                className="object-cover"
              />
            </div>
            <p className="mt-4 border-t border-[#16130F]/15 pt-4 text-[13px] leading-[1.6] text-[#6A625A]">
              When I am not working, I am usually somewhere cold, high, or
              underwater.
            </p>

            <dl className="mt-6 space-y-3 text-[13px]">
              <div className="flex justify-between gap-6 border-t border-[#16130F]/15 pt-3">
                <dt className="text-[#6A625A]">Focus</dt>
                <dd className="text-right">Automation &amp; data platforms</dd>
              </div>
              <div className="flex justify-between gap-6 border-t border-[#16130F]/15 pt-3">
                <dt className="text-[#6A625A]">Stack</dt>
                <dd className="text-right">Python, Snowflake, Streamlit</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="grid grid-cols-1 border-t border-[#16130F]/15 sm:grid-cols-3">
          <Metric
            value="$20M+"
            label="Collected through an automated settlement flow that replaced a 12-person team."
          />
          <Metric
            value="100M+"
            label="Rows of cashflow and customer data modeled in a Snowflake platform I designed."
            bordered
          />
          <Metric
            value="40+"
            label="Daily users on internal tools I built and maintain across two companies."
            bordered
          />
        </section>
      </div>
    </div>
  );
}

function Metric({
  value,
  label,
  bordered = false,
}: {
  value: string;
  label: string;
  bordered?: boolean;
}) {
  return (
    <div
      className={`py-10 sm:pr-10 ${
        bordered ? "border-t border-[#16130F]/15 sm:border-t-0 sm:border-l sm:pl-10" : ""
      }`}
    >
      <p className={`${newsreader.className} text-4xl tracking-[-0.02em]`}>
        {value}
      </p>
      <p className="mt-3 max-w-[32ch] text-[13px] leading-[1.65] text-[#6A625A]">
        {label}
      </p>
    </div>
  );
}
