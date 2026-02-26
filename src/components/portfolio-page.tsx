"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

type SectionId = "home" | "projects" | "research" | "about";

const researchTracks = [
  {
    title: "AI Safety",
    summary: "SafePro: Evaluating the Safety of Professional-Level AI Agents",
    authors:
      "Kaiwen Zhou, Shreedhar Jangam, Ashwin Nagarajan, Tejas Polu, Suhas Oruganti, Chengzhi Liu, Ching-Chen Kuo, Yuting Zheng, Sravana Narayanaraju, Xin Eric Wang",
    meta: "arXiv:2601.06663, 2026",
    previewImage: "/safepro-preview.png",
    publication: "https://arxiv.org/pdf/2601.06663",
    publicationLabel: "PDF",
    citation: `@article{zhou2025safepro,
  title={SafePro: Evaluating the Safety of Professional-Level AI Agents},
  author={Zhou, Kaiwen and Jangam, Shreedhar and Nagarajan, Ashwin and Polu, Tejas and Oruganti, Suhas and Liu, Chengzhi and Kuo, Ching-Chen and Zheng, Yuting and Narayanaraju, Sravana and Wang, Xin Eric},
  journal={arXiv preprint arXiv:2505.16186},
  year={2026}
}`,
  },
  {
    title: "Computer Vision",
    summary:
      "Mouse-Guided Gaze: Semi-Supervised Learning of Intention-Aware Representations for Reading Detection",
    authors: "Seongsil Heo, Roberto Manduchi",
    meta: "arXiv:2509.19574, 2025",
    previewImage: "/mouse-guided-gaze-preview.png",
    publication: "https://arxiv.org/abs/2509.19574v1",
    publicationLabel: "PDF",
  },
];

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const sectionIds = useMemo<SectionId[]>(
    () => ["home", "projects", "research", "about"],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionId;
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const scrollToSection = (id: SectionId) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Suhas8215",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.3.8-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.6-1.3-5.6-6 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 1.9 1.2 3.2 0 4.7-2.9 5.7-5.7 6 .5.4.9 1.1.9 2.3v3.3c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/suhasoruganti/",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5 2.5 2.5 0 0 0 4.98 3.5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4.1 0 4.8 2.7 4.8 6.2V21h-4v-5.3c0-1.3 0-2.8-1.8-2.8-1.8 0-2 1.4-2 2.7V21h-4V9Z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.8 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#102347_0%,_#070B14_45%,_#05070F_100%)] text-slate-100">
      <header className="sticky top-0 z-20 border-b border-blue-400/15 bg-[#05070fcc] backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollToSection("home")}
            className="font-[family-name:var(--font-sora)] text-sm tracking-[0.2em] text-blue-200 transition hover:text-blue-100"
          >
            SUHAS ORUGANTI
          </button>
          <div className="flex items-center gap-2">
            <nav className="flex items-center gap-1">
              {sectionIds.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`rounded-full px-4 py-2 text-sm capitalize transition ${
                    activeSection === id
                      ? "bg-blue-500/25 text-blue-100"
                      : "text-slate-300 hover:bg-blue-500/10 hover:text-blue-100"
                  }`}
                >
                  {id}
                </button>
              ))}
            </nav>
            <a
              href="/resume"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-100 transition hover:border-blue-200/60 hover:bg-blue-400/30"
            >
              Resume
              <span className="transition group-hover:translate-x-0.5">&#8599;</span>
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-28 px-6 pb-24 pt-14">
        <section id="home" className="reveal space-y-8">
          <h1 className="max-w-4xl font-[family-name:var(--font-sora)] text-5xl font-semibold leading-tight text-white md:text-7xl">
            Hi. I&apos;m Suhas.
          </h1>
          <p className="text-2xl font-semibold text-slate-200 md:text-4xl">
            Engineer. Innovator. Researcher.
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
            Building thoughtful software with AI, product, and research.
          </p>
          <p className="flex items-end gap-2 text-xl text-slate-200">
            <span>SDE @</span>
            <span className="relative inline-flex h-10 w-7 items-start justify-center">
              <span className="font-[family-name:var(--font-sora)] text-3xl font-semibold leading-none text-slate-100">
                a
              </span>
              <svg
                viewBox="0 0 40 16"
                aria-hidden="true"
                className="absolute -bottom-0.5 left-0 w-7 text-slate-100/90"
              >
                <path
                  d="M2 5.5c8.8 6 22.6 6 33.6 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M31.5 2.8 36 5.6l-4.9 1.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-lg text-slate-300">Amazon</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollToSection("projects")}
              className="rounded-full bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-400"
            >
              Explore Projects
            </button>
            <button
              onClick={() => scrollToSection("research")}
              className="rounded-full border border-blue-300/40 px-6 py-3 font-medium text-blue-100 transition hover:border-blue-200 hover:bg-blue-300/10"
            >
              View Research
            </button>
          </div>
        </section>

        <section id="projects" className="reveal space-y-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-200/80">
                Projects
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-sora)] text-3xl text-white md:text-4xl">
                Featured Projects
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-400 md:text-right">
              Click any project card to view full details.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section id="research" className="reveal space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200/80">
              Research
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-sora)] text-3xl text-white md:text-4xl">
              Active Focus Areas
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-blue-200/30 bg-blue-400/10 px-5 py-2 text-sm text-blue-100">
              AI Safety
            </span>
            <span className="rounded-full border border-blue-200/30 bg-blue-400/10 px-5 py-2 text-sm text-blue-100">
              Interpretable AI
            </span>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {researchTracks.map((track, index) => (
              <article
                key={track.title}
                className="rounded-3xl border border-blue-200/20 bg-[#0A1124] p-5 transition duration-500 hover:border-blue-200/45"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4">
                  <div className="relative h-24 w-40 shrink-0 overflow-hidden rounded-xl border border-blue-300/20 bg-[#0B1328]">
                    <Image
                      src={track.previewImage}
                      alt={`${track.title} publication preview`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-sora)] text-xl text-white">
                      {track.summary}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">{track.authors}</p>
                    <p className="mt-1 text-sm italic text-slate-400">{track.meta}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={track.publication}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-blue-300/40 px-4 py-2 text-sm text-blue-100 transition hover:border-blue-100 hover:bg-blue-400/20"
                  >
                    {track.publicationLabel}
                  </a>
                  {track.citation ? (
                    <details className="rounded-full border border-blue-300/40 px-4 py-2 text-sm text-blue-100">
                      <summary className="cursor-pointer select-none">BibTeX</summary>
                      <pre className="mt-3 max-h-44 overflow-auto whitespace-pre-wrap rounded-xl border border-blue-200/15 bg-[#0B1328]/80 p-3 text-xs text-slate-300">
                        {track.citation}
                      </pre>
                    </details>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="reveal space-y-12">
          <div className="grid gap-8 md:grid-cols-[320px_1fr] md:items-start">
            <div className="h-[360px] w-full overflow-hidden rounded-2xl border border-blue-200/20">
              <Image
                src="/suhas3.jpg"
                alt="Portrait of Suhas Oruganti"
                width={900}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-200/80">
                About
              </p>
              <h2 className="font-[family-name:var(--font-sora)] text-4xl font-semibold leading-tight text-white md:text-5xl">
                I&apos;m an Engineer, Researcher, and Builder from the Bay Area.
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
                A third-year Computer Science student at UCSC working on AI
                safety, multimodal systems, and human-in-the-loop AI. I enjoy
                shipping practical products while keeping a strong research
                lens.
              </p>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
                Outside the lab, I like building side projects, mentoring
                students, and exploring how to make emerging technologies useful
                in the real world.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center justify-between rounded-full border border-blue-300/25 bg-blue-400/10 px-6 py-4">
              <div>
                <p className="font-semibold text-white">Baskin Engineering</p>
                <p className="text-sm text-slate-300">Group Tutor</p>
              </div>
              <p className="text-sm font-medium text-slate-200">
                Fall 2024 - Present
              </p>
            </div>
            <div className="flex items-center justify-between rounded-full border border-blue-300/25 bg-blue-400/10 px-6 py-4">
              <div>
                <p className="font-semibold text-white">Amazon</p>
                <p className="text-sm text-slate-300">Software Development Intern</p>
              </div>
              <p className="text-sm font-medium text-slate-200">
                June 2025 - Sept 2025
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            <h3 className="font-[family-name:var(--font-sora)] text-5xl text-white">
              Let&apos;s connect!
            </h3>
            <p className="text-lg text-slate-300">
              I&apos;m always excited to discuss engineering challenges,
              research opportunities, startup ideas, or AI technology.
            </p>
            <div className="flex items-center justify-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center text-blue-100 transition hover:text-blue-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
