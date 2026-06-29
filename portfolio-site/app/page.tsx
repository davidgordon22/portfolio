import Image from "next/image";
import SlideInSection from "@/components/SlideInSection";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-neutral-950 text-neutral-200">
      {/* ----------------------------- Hero ----------------------------- */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-24 md:grid-cols-2 md:px-8 md:pt-32">
        <SlideInSection direction="left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-500">
            David Gordon
          </p>

          <h1 className="text-5xl font-bold leading-tight text-neutral-50 md:text-6xl">
            Business Systems Engineer<span className="text-amber-500">.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-8 text-neutral-400">
            I build automation, data infrastructure, and internal software that
            replace manual work with systems people actually trust. When I am not
            shipping, I am usually somewhere high, cold, or underwater.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-amber-500 px-5 py-3 font-medium text-neutral-950 transition-colors hover:bg-amber-400"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-neutral-700 px-5 py-3 font-medium text-neutral-200 transition-colors hover:border-neutral-400"
            >
              My Resume
            </a>
          </div>
        </SlideInSection>

        <SlideInSection direction="right">
          <div className="flex justify-center md:justify-end">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border border-neutral-800 bg-neutral-900">
              <Image
                src="/profile.png"
                alt="David Gordon in the mountains"
                width={320}
                height={320}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </SlideInSection>
      </section>

      {/* ------------------------- What I Build ------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
        <SlideInSection direction="left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-500">
            What I Build
          </p>
          <h2 className="max-w-2xl text-3xl font-bold text-neutral-50 md:text-4xl">
            I turn expensive, manual processes into systems that pay for
            themselves.
          </h2>
        </SlideInSection>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <SlideInSection direction="left">
            <div className="h-full rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <p className="text-3xl font-bold text-amber-500">$20M+</p>
              <p className="mt-3 leading-7 text-neutral-400">
                Collected through an automated settlement flow that replaced a
                12-person negotiations team and now drives 55%+ of company
                revenue.
              </p>
            </div>
          </SlideInSection>

          <SlideInSection direction="left">
            <div className="h-full rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <p className="text-3xl font-bold text-amber-500">100M+ rows</p>
              <p className="mt-3 leading-7 text-neutral-400">
                Of cashflow, customer, and company data modeled in a Snowflake
                platform I designed from scratch to drive real decisions.
              </p>
            </div>
          </SlideInSection>

          <SlideInSection direction="left">
            <div className="h-full rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <p className="text-3xl font-bold text-amber-500">40+ users</p>
              <p className="mt-3 leading-7 text-neutral-400">
                On internal tools I built and maintain - used daily by sales
                reps, customer service, and executives across two companies.
              </p>
            </div>
          </SlideInSection>
        </div>
      </section>

      {/* ------------------------- Projects ----------------------------- */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
        <SlideInSection direction="right">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-500">
            Selected Projects
          </p>
          <h2 className="text-3xl font-bold text-neutral-50 md:text-4xl">
            A few things I have shipped.
          </h2>
        </SlideInSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <SlideInSection direction="left">
            <ProjectCard
              title="Otter Dolphin"
              role="Internal CRM & BI Platform"
              description="A secure CRM and business-intelligence platform pulling realtime data from three separate API pipelines, used by 40+ people across two companies to make decisions on live numbers instead of stale reports."
              tags={["Python", "Snowflake", "Streamlit", "APIs"]}
              link="https://otterdolphin.com"
              icon={
                <Image
                  src="/otterdolphin.png"
                  alt="Otter Dolphin logo"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-cover"
                />
              }
            />
          </SlideInSection>

          <SlideInSection direction="right">
            <ProjectCard
              title="Settlement Automation"
              role="End-to-End Revenue Workflow"
              description="Takes offers from creditors, matches them against live cashflows, and returns offers with zero human intervention. I rebuilt the organic version in one week after a vendor failed to deliver it in a year."
              tags={["Python", "Automation", "Snowflake"]}
            />
          </SlideInSection>

          <SlideInSection direction="left">
            <ProjectCard
              title="Argo Delivery"
              role="Founder & Mobile App Developer"
              description="A B2C delivery app connecting high-cost local markets with cheaper purchasing options. Launched on the App Store with a multi-order model designed to keep long-distance delivery profitable."
              tags={["Mobile", "App Store", "Product"]}
              link="https://argodelivery.com"
              icon={
                <Image
                  src="/argo.png"
                  alt="Argo Delivery logo"
                  width={56}
                  height={56}
                  className="h-14 w-14 scale-[1.18] object-cover"
                />
              }
            />
          </SlideInSection>

          <SlideInSection direction="right">
            <ProjectCard
              title="No Rep Snacks"
              role="Automated Retail Checkout"
              description="An automated checkout that uses customer recognition and object detection to identify purchases and send invoices - computer vision, billing logic, and real-world testing in an actual store."
              tags={["Computer Vision", "Python", "Automation"]}
              link="https://norepsnacks.com"
              icon={
                <div className="flex h-14 w-14 items-center justify-center bg-black px-1 text-center text-[10px] font-bold uppercase leading-tight tracking-tight text-white">
                  No Rep Snacks
                </div>
              }
            />
          </SlideInSection>
        </div>

        <SlideInSection direction="left">
          <div className="mt-10 overflow-hidden rounded-2xl border border-neutral-800">
            <div className="relative h-72 w-full md:h-96">
              <Image
                src="/mountain-laptop.png"
                alt="Working on a laptop on a mountainside"
                fill
                className="object-cover"
              />
            </div>
            {/* <p className="bg-neutral-900/60 px-6 py-4 text-sm text-neutral-400">
              
            </p> */}
          </div>
        </SlideInSection>
      </section>

      {/* ----------------------- Beyond the Desk ------------------------ */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
        <SlideInSection direction="right">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-500">
            Beyond the Desk
          </p>
          <h2 className="max-w-2xl text-3xl font-bold text-neutral-50 md:text-4xl">
            The same stubbornness, applied to harder terrain.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-neutral-400">
            {/* I do not have a great relationship with the word &quot;quit.&quot;
            That tends to show up at work and, more obviously, in places with bad
            weather and worse cell service.

           */}
          </p>
        </SlideInSection>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <SlideInSection direction="left">
            <figure className="overflow-hidden rounded-2xl border border-neutral-800">
              <div className="relative h-64 w-full">
                <Image
                  src="/via-ferrata.png"
                  alt="On a via ferrata ladder above a deep valley"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="bg-neutral-900/60 px-4 py-3 text-sm text-neutral-400">
                Willing to work anytime anywhere.
              </figcaption>
            </figure>
          </SlideInSection>

          <SlideInSection direction="left">
            <figure className="overflow-hidden rounded-2xl border border-neutral-800">
              <div className="relative h-64 w-full">
                <Image
                  src="/mtb.png"
                  alt="Mountain biking off a rock drop in the forest"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="bg-neutral-900/60 px-4 py-3 text-sm text-neutral-400">
                Not great at mountain biking, but I fake it well, sometimes.
              </figcaption>
            </figure>
          </SlideInSection>

          <SlideInSection direction="left">
            <figure className="overflow-hidden rounded-2xl border border-neutral-800">
              <div className="relative h-64 w-full">
                <Image
                  src="/spearfishing.png"
                  alt="In a wetsuit at night before a dive"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="bg-neutral-900/60 px-4 py-3 text-sm text-neutral-400">
                Lobster diving has been a hobby of mine, but they walk away unscathed most of the time.
              </figcaption>
            </figure>
          </SlideInSection>
        </div>

        <SlideInSection direction="right">
          <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
            <h3 className="text-lg font-semibold text-neutral-100">
              A few things I have finished (or survived)
            </h3>
            <ul className="mt-6 grid gap-x-8 gap-y-3 text-neutral-400 sm:grid-cols-2">
              <li className="border-l-2 border-amber-500/60 pl-4">
                2026 CrossFit Games Semifinals Athlete
              </li>
              <li className="border-l-2 border-amber-500/60 pl-4">
                Arc of Attrition 50-Mile Ultramarathon Finisher
              </li>
              <li className="border-l-2 border-amber-500/60 pl-4">
                Solo ascents of the Matterhorn, Mont Blanc, Eiger & Grand Teton
              </li>
              <li className="border-l-2 border-amber-500/60 pl-4">
                Ironman California 2024 - 5th place AG, Ironman 70.3 Tempe
              </li>
              <li className="border-l-2 border-amber-500/60 pl-4">
                PADI Advanced Open Water Diver
              </li>
              <li className="border-l-2 border-amber-500/60 pl-4">
                Level 3 USHPA Paragliding License
              </li>
            </ul>
          </div>
        </SlideInSection>
      </section>

      {/* --------------------------- Contact ---------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
        <SlideInSection direction="left">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-500">
              Get in touch
            </p>
            <h2 className="text-3xl font-bold text-neutral-50 md:text-4xl">
              {/* Have a messy process worth automating? */}
            </h2>
            <p className="mx-auto mt-4 max-w-md leading-8 text-neutral-400">
              {/* I am always happy to talk shop - systems, data, or the next
              mountain. */}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:dgordon102202@gmail.com"
                className="rounded-xl bg-amber-500 px-5 py-3 font-medium text-neutral-950 transition-colors hover:bg-amber-400"
              >
                dgordon102202@gmail.com
              </a>
              <a
                href="tel:+18133448648"
                className="rounded-xl border border-neutral-700 px-5 py-3 font-medium text-neutral-200 transition-colors hover:border-neutral-400"
              >
                +1 813-344-8648
              </a>
            </div>
          </div>
        </SlideInSection>
      </section>

      <footer className="border-t border-neutral-900 py-8 text-center text-sm text-neutral-500">
        &copy; {new Date().getFullYear()} David Gordon
      </footer>
    </main>
  );
}
