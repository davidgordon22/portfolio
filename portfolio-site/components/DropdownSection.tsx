"use client";
import { useState } from "react";
export default function DropdownSection(){
    const [open, setOpen] = useState(false);

    return (
        <section>
            <button
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between rounded-lg border border-slate-500 px-4 py-2 text-left hover:border-blue-400 hover:bg-slate-800/50" 
            >
              <h3 className="text-x1 font-semibold">
                {open ? "Collapse" : "Expand"}
                </h3>
            </button>
            {open && (
              <div className="mt-6">
                <h3 className="max-w-2xl text-3xl text-neutral-300 md:text-lg">
                  Although AI has contributed in a positive way to the impacts I have been
      able to bring to my career, there has yet to be a model that is a full
      substitute for critical thinking. AI was first being adopted in my senior
      year of college, and thankfully I built Argo Delivery just before the
      mainstream adoption of AI. So I still got the opportunity to think through
      building an app from the ground up while utilizing some of the earlier
      models to help on coding issues. I think this timeline was very beneficial
      to me because I got to learn how to use LLMs when they were still
      extremely unreliable, which taught me to carry a high level of skepticism
      when implementing adjustments they suggested. This has since developed
      into a workflow progression I take into all of my projects: utilizing LLMs
      to do busy work, and using my own brain to determine project trajectory,
      plan for breaks in the system, develop rigorous testing protocols, and
      build out multi-redundant systems to ensure LLM outputs assist in
      increasing my work efficiency and never hinder it.               
                </h3>

              </div>
            

            )}
        </section>

    );
}

