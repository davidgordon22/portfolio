import Image from "next/image";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import DropdownSection from "@/components/DropdownSection";

const shell = "mx-auto w-full max-w-[1280px] px-6 md:px-10";

const metrics = [
  {
    index: "01",
    value: "$20M+",
    description:
      "Collected through an automated settlement flow that replaced a 12-person negotiations team and now drives 55%+ of company revenue.",
  },
  {
    index: "02",
    value: "100M+ rows",
    description:
      "Of cashflow, customer, and company data modeled in a Snowflake platform I designed from scratch, with role-based access control keeping proprietary financial data scoped to the people who need it.",
  },
  {
    index: "03",
    value: "40+ users",
    description:
      "On internal tools I built and maintain, used daily by executives, sales reps, and customer service. Those systems support a 120-person primary company inside a 600+ person group.",
  },
];

const pursuits = [
  {
    src: "/via-ferrata.jpg",
    alt: "On a via ferrata ladder above a deep valley",
    caption: "Willing to work anytime anywhere.",
  },
  {
    src: "/mtb.jpg",
    alt: "Mountain biking off a rock drop in the forest",
    caption: "Not great at mountain biking, but I fake it well, sometimes.",
  },
  {
    src: "/spearfishing.jpg",
    alt: "In a wetsuit at night before a dive",
    caption:
      "Lobster diving has been a hobby of mine, but they walk away unscathed most of the time.",
  },
];

const accomplishments = [
  "2026 CrossFit Games Semifinals Qualifier",
  "Arc of Attrition 50-Mile Ultramarathon Finisher",
  "Solo ascents of the Matterhorn, Mont Blanc, Eiger & Grand Teton",
  "Ironman California 2024 - 5th place AG, Ironman 70.3 Tempe",
  "Zermatt Ultra Marathon 2026 - 4th place AG, 17th overall",
  "PADI Advanced Open Water Diver",
  "Level 3 USHPA Paragliding License",
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-canvas text-ink">
      <header className={`${shell} flex items-center justify-between py-5`}>
        <span className="text-[15px] font-medium tracking-[-0.01em]">
          David Gordon
        </span>
        <span className="font-mono text-[12px] text-meta">Portfolio 2026</span>
      </header>

      {/* ----------------------------- Hero ----------------------------- */}
      <section className={shell}>
        <div className="grid grid-cols-1 gap-12 border-t border-rule py-16 md:grid-cols-12 md:gap-8 md:py-20">
          <div className="md:col-span-7">
            <p className="border-l border-rule pl-4 font-mono text-[12px] leading-[1.7] text-meta">
              Business Systems Engineer
              <br />
              Automation · Data infrastructure · Internal software
            </p>

            <h1 className="mt-10 text-[clamp(2.4rem,5.4vw,4.25rem)] font-medium leading-[1.03] tracking-[-0.035em]">
              I replace manual work with systems people actually trust.
            </h1>

            <p className="mt-8 max-w-[54ch] text-[16px] leading-[1.75] text-muted">
              I build the automation, data platforms, and internal tools that
              operations teams run on. They take repetitive work off
              people&apos;s plates and let them spend their hours on judgment
              instead. When I am not working, I am usually somewhere cold, alpine,
              or underwater.
            </p>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 font-mono text-[13px]">
              <a
                href="#projects"
                className="border-b border-rule pb-1 transition-colors hover:border-ink"
              >
                Selected work
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-rule pb-1 text-muted transition-colors hover:border-ink hover:text-ink"
              >
                Résumé (PDF)
              </a>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <div className="relative aspect-3/4 w-full overflow-hidden bg-panel">
              <Image
                src="/profile.jpg"
                alt="David Gordon holding his bib and finisher medal at the Trail Verbier St-Bernard X-Alpine"
                fill
                priority
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 font-mono text-[12px] leading-[1.6] text-meta">
              Trail Verbier St-Bernard, X-Alpine finish.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------- What I Build ------------------------- */}
      <section className={shell}>
        <Reveal>
          <div className="border-t border-rule pt-16">
            <p className="font-mono text-[12px] text-meta">What I build</p>
            <h2 className="mt-6 max-w-[24ch] text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.03em]">
              I turn expensive, manual processes into systems that pay for
              themselves.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 pb-20 pt-14 sm:grid-cols-3">
          {metrics.map((metric, i) => (
            <Reveal
              key={metric.index}
              className={`sm:pr-8 ${
                i > 0
                  ? "border-t border-rule pt-10 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0"
                  : ""
              } ${i > 0 ? "mt-10 sm:mt-0" : ""}`}
            >
              <p className="font-mono text-[12px] text-faint">{metric.index}</p>
              <p className="mt-4 text-[28px] font-medium tracking-[-0.03em]">
                {metric.value}
              </p>
              <p className="mt-3 text-[14px] leading-[1.7] text-muted">
                {metric.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 mx-auto max-w-6xl px-6 py-24 md:px-8">
        <Reveal>
          <p className="mb-3 text-lg font-bold tracking-widest text-white-500">
            NOT a &apos;Token-Maxer&apos;
          </p>
<section className="group rounded-lg p6">
          <p className="mt-4 text-neutral-300 opacity-0 transition-opacity duration-100 group-hover:opacity-100">
        This section is meant to ironically look vibe coded because LLMs always seem to use blue backgrounds
          </p>
          </section>
          <h2 className="mb-3 text-med font-semibold text-black-500">
            How I have integrated LLMs into work while minimizing wasted time on vibe-coded errors:
          </h2>
          <DropdownSection />
        </Reveal>
      </section>

      {/* ------------------------- Projects ----------------------------- */}
      <section id="projects" className={shell}>
        <Reveal>
          <div className="border-t border-rule pt-16">
            <p className="font-mono text-[12px] text-meta">Selected projects</p>
            <h2 className="mt-6 text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.03em]">
              A few things I have shipped.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          <Reveal>
            <ProjectCard
              index="01"
              title="Otter Dolphin"
              role="Internal CRM & BI Platform"
              description="A secure CRM and business-intelligence platform pulling realtime data from three separate API pipelines, used by 40+ people across two companies to make decisions on live numbers instead of stale reports."
              tags={["Python", "Snowflake", "Streamlit", "APIs"]}
              link="https://otterdolphin.com"
              icon={
                <Image
                  src="/otterdolphin.png"
                  alt="Otter Dolphin logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-cover"
                />
              }
            />
          </Reveal>

          <Reveal>
            <ProjectCard
              index="02"
              title="Settlement Automation"
              role="End-to-End Revenue Workflow"
              description="Takes offers from creditors, matches them against live cashflows, and returns offers with zero human intervention. I rebuilt the organic version in one week after a vendor failed to deliver it in a year."
              tags={["Python", "Automation", "Snowflake"]}
            />
          </Reveal>

          <Reveal>
            <ProjectCard
              index="03"
              title="Argo Delivery"
              role="Founder & Mobile App Developer"
              description="A B2C delivery app connecting high-cost local markets with cheaper purchasing options. Launched on the App Store with a multi-order model designed to keep long-distance delivery profitable."
              tags={["Mobile", "App Store", "Product"]}
              link="https://argodelivery.com"
              icon={
                <Image
                  src="/argo.png"
                  alt="Argo Delivery logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 scale-[1.18] object-cover"
                />
              }
            />
          </Reveal>

          <Reveal>
            <ProjectCard
              index="04"
              title="No Rep Snacks"
              role="Automated Retail Checkout"
              description="An automated checkout that uses customer recognition and object detection to identify purchases and send invoices - computer vision, billing logic, and real-world testing in an actual store."
              tags={["Computer Vision", "Python", "Automation"]}
              link="https://norepsnacks.com"
              icon={
                <div className="flex h-12 w-12 items-center justify-center bg-ink px-1 text-center text-[9px] font-bold uppercase leading-tight tracking-tight text-canvas">
                  No Rep Snacks
                </div>
              }
            />
          </Reveal>
        </div>

        <Reveal className="mt-16 pb-20">
          <div className="relative h-72 w-full overflow-hidden bg-panel md:h-96">
            <Image
              src="/mountain-laptop.jpg"
              alt="Working on a laptop on a mountainside"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* ----------------------- Beyond the Desk ------------------------ */}
      <section className={shell}>
        <Reveal>
          <div className="grid grid-cols-1 gap-12 border-t border-rule pt-16 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <p className="font-mono text-[12px] text-meta">Beyond the desk</p>
              <h2 className="mt-6 max-w-[24ch] text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.03em]">
                The same stubbornness, applied to harder terrain.
              </h2>
              <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.75] text-muted">
                I do not have a great relationship with the word
                &quot;quit.&quot; That tends to show up at work and, more
                obviously, in places with bad weather and worse cell service.
              </p>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <div className="relative aspect-3/4 w-full overflow-hidden bg-panel">
                <Image
                  src="/ski-touring.jpg"
                  alt="David Gordon crossing a snowfield with skis on his pack below a rocky peak"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 font-mono text-[12px] leading-[1.6] text-meta">
                Skis on the pack, somewhere cold and alpine.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pursuits.map((pursuit) => (
            <Reveal key={pursuit.src}>
              <figure>
                <div className="relative h-64 w-full overflow-hidden bg-panel">
                  <Image
                    src={pursuit.src}
                    alt={pursuit.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 font-mono text-[12px] leading-[1.6] text-meta">
                  {pursuit.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 pb-20">
          <div className="border-t border-rule pt-8">
            <p className="font-mono text-[12px] text-meta">
              Some of my accomplishments
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {accomplishments.map((item) => (
                <li
                  key={item}
                  className="border-b border-rule py-3 text-[14px] leading-[1.6] text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* --------------------------- Contact ---------------------------- */}
      <section id="contact" className={shell}>
        <Reveal>
          <div className="grid grid-cols-1 gap-10 border-t border-rule py-20 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="font-mono text-[12px] text-meta">Get in touch</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="max-w-[20ch] text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.03em]">
                Have a messy process worth automating?
              </h2>
              <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.75] text-muted">
                I am always happy to talk shop: systems, data, or the next
                mountain. My contact details are on my résumé.
              </p>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 font-mono text-[13px]">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-rule pb-1 transition-colors hover:border-ink"
                >
                  Résumé (PDF)
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className={shell}>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-rule py-8 font-mono text-[12px] text-faint">
          <span>&copy; {new Date().getFullYear()} David Gordon</span>
          <span>Business Systems Engineer</span>
        </div>
      </footer>
    </main>
  );
}
