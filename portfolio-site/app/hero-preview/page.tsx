import Link from "next/link";
import { inter } from "./fonts";

const variants = [
  {
    href: "/hero-preview/editorial",
    name: "Editorial",
    note: "Warm paper, serif display, asymmetric grid, hairline rules.",
  },
  {
    href: "/hero-preview/swiss",
    name: "Swiss",
    note: "Near-black, no accent colour, mono metadata, strict grid.",
  },
  {
    href: "/hero-preview/document",
    name: "Document",
    note: "Masthead name, spec-sheet metadata, institutional restraint.",
  },
];

export default function HeroPreviewIndex() {
  return (
    <div className={`${inter.className} min-h-screen bg-[#FBFAF8] text-[#121110]`}>
      <div className="mx-auto max-w-[720px] px-6 py-20">
        <h1 className="text-2xl font-medium tracking-[-0.02em]">
          Hero directions
        </h1>
        <p className="mt-3 text-[15px] leading-[1.7] text-[#57514A]">
          Three alternatives to the current hero, each avoiding the visual tells
          of generated sites: saturated single-accent palettes, circular
          avatars, paired pill buttons, and uppercase marketing eyebrows.
        </p>
        <ul className="mt-10">
          {variants.map((variant) => (
            <li key={variant.href} className="border-t border-[#121110]/15">
              <Link
                href={variant.href}
                className="flex items-baseline justify-between gap-6 py-5 transition-opacity hover:opacity-60"
              >
                <span className="text-[15px]">{variant.name}</span>
                <span className="text-right text-[13px] text-[#7A736B]">
                  {variant.note}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
