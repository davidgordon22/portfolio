import type { ReactNode } from "react";

// TypeScript lesson: an "interface" describes the exact shape of the data a
// component expects. If you pass the wrong type (e.g. a number where a string
// is expected) or forget a required field, the editor flags it before you run.
//
// The "?" after a field name makes it optional. Everything else is required.
export interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  // A list of short labels (e.g. ["Python", "Snowflake"]). string[] = array of strings.
  tags: string[];
  // Optional link. When present, the whole card becomes clickable.
  link?: string;
  // Optional icon. ReactNode means "anything React can render" - an <Image>,
  // a styled <div>, text, etc. Omit it and no icon shows.
  icon?: ReactNode;
}

// The ": ProjectCardProps" tells TypeScript what "props" must look like.
export default function ProjectCard({
  title,
  role,
  description,
  tags,
  link,
  icon,
}: ProjectCardProps) {
  // The visible contents are the same whether or not the card is a link, so we
  // build them once and reuse them below.
  const content = (
    <>
      <div className="flex items-start gap-4">
        {icon && (
          <div className="shrink-0 overflow-hidden rounded-xl">{icon}</div>
        )}
        <div>
          <h3 className="text-xl font-semibold text-neutral-100">{title}</h3>
          <p className="mt-1 text-sm font-medium text-amber-500">{role}</p>
        </div>
      </div>

      <p className="mt-4 flex-1 leading-7 text-neutral-400">{description}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300"
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* This only renders when "link" was actually provided. */}
      {link && (
        <span className="mt-6 inline-flex items-center text-sm font-medium text-amber-500 group-hover:text-amber-400">
          Visit site &rarr;
        </span>
      )}
    </>
  );

  const baseClasses =
    "flex h-full flex-col rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition-colors hover:border-amber-500/60";

  // With a link, render the card as an anchor so the whole thing is clickable.
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${baseClasses}`}
      >
        {content}
      </a>
    );
  }

  // Without a link, it is just a static card.
  return <article className={baseClasses}>{content}</article>;
}
