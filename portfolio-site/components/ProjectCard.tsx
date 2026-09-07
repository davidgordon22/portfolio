import type { ReactNode } from "react";

export interface ProjectCardProps {
  index: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
  icon?: ReactNode;
}

export default function ProjectCard({
  index,
  title,
  role,
  description,
  tags,
  link,
  icon,
}: ProjectCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[12px] text-faint">{index}</p>
          <h3 className="mt-4 text-[22px] font-medium tracking-[-0.02em]">
            {title}
          </h3>
          <p className="mt-1 font-mono text-[12px] text-meta">{role}</p>
        </div>
        {icon && <div className="shrink-0 overflow-hidden">{icon}</div>}
      </div>

      <p className="mt-5 flex-1 text-[15px] leading-[1.7] text-muted">
        {description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-faint">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      {link && (
        <span className="mt-6 inline-block w-fit border-b border-rule pb-1 font-mono text-[12px] text-meta transition-colors group-hover:border-ink group-hover:text-ink">
          Visit site
        </span>
      )}
    </>
  );

  const baseClasses =
    "flex h-full flex-col border-t border-rule pt-8 pb-2 transition-colors";

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${baseClasses} hover:border-ink`}
      >
        {content}
      </a>
    );
  }

  return <article className={baseClasses}>{content}</article>;
}
