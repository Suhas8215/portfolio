import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#05070F] px-6 py-8 text-slate-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="font-[family-name:var(--font-sora)] text-3xl text-white">
            Resume
          </h1>
          <Link
            href="/"
            className="rounded-full border border-blue-300/30 px-4 py-2 text-sm text-blue-100 transition hover:border-blue-200 hover:bg-blue-400/15"
          >
            Back to Portfolio
          </Link>
        </div>
        <div className="h-[80vh] overflow-hidden rounded-2xl border border-blue-300/20 bg-[#0B1328]">
          <iframe
            src="/resume.pdf"
            title="Suhas Resume"
            className="h-full w-full"
          />
        </div>
      </div>
    </main>
  );
}
