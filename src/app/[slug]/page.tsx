import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#102347_0%,_#070B14_45%,_#05070F_100%)] px-6 py-10 text-slate-100">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <Link
          href="/"
          className="inline-flex rounded-full border border-blue-300/30 px-4 py-2 text-sm text-blue-100 transition hover:border-blue-200 hover:bg-blue-400/15"
        >
          Back to Portfolio
        </Link>

        <section className="grid gap-8 rounded-3xl border border-blue-200/15 bg-[#0A1124] p-8 md:grid-cols-[1.1fr_420px] md:items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-200/80">
              {project.subtitle}
            </p>
            <h1 className="font-[family-name:var(--font-sora)] text-4xl text-white md:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-3xl text-lg text-slate-300">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-blue-200/25 bg-blue-300/10 px-3 py-1 text-xs text-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.links?.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-blue-300/40 px-4 py-2 text-sm text-blue-100 transition hover:border-blue-100 hover:bg-blue-400/20"
                >
                  GitHub
                </a>
              ) : null}
              {project.links?.demo ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-blue-300/40 px-4 py-2 text-sm text-blue-100 transition hover:border-blue-100 hover:bg-blue-400/20"
                >
                  Demo
                </a>
              ) : null}
              {project.links?.devpost ? (
                <a
                  href={project.links.devpost}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-blue-300/40 px-4 py-2 text-sm text-blue-100 transition hover:border-blue-100 hover:bg-blue-400/20"
                >
                  Devpost
                </a>
              ) : null}
            </div>
          </div>

          <div className="relative mx-auto h-72 w-full max-w-[360px]">
            <Image
              src={project.imageSrc}
              alt={`${project.title} visual`}
              fill
              className="object-contain drop-shadow-[0_24px_20px_rgba(0,0,0,0.5)]"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
