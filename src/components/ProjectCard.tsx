import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/${project.slug}`}
      className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(145deg,#0f1b3a_0%,#0b1328_55%,#0a1124_100%)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200/40 hover:shadow-[0_18px_50px_-24px_rgba(75,133,255,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
    >
      <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl transition group-hover:bg-blue-400/25" />

      <div className="relative flex min-h-[280px] flex-col gap-6 md:pr-48">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-blue-200/80">
            {project.subtitle}
          </p>
          <h3 className="font-[family-name:var(--font-sora)] text-3xl text-white">
            {project.title}
          </h3>
          <p className="max-w-xl text-slate-300">{project.description}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-blue-200/25 bg-blue-300/10 px-3 py-1 text-xs text-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-6 h-44 w-full md:pointer-events-none md:absolute md:bottom-6 md:right-6 md:mt-0 md:h-[230px] md:w-[220px]">
        <div className="relative h-full w-full rounded-2xl">
          <Image
            src={project.imageSrc}
            alt={`${project.title} visual`}
            fill
            className="object-contain drop-shadow-[0_22px_18px_rgba(0,0,0,0.55)] transition duration-300 md:rotate-[-6deg] md:group-hover:rotate-[-2deg] md:group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </Link>
  );
}
