import { Sparkles, Zap, ShieldCheck, Palette, Download, Layers } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "High quality outputs",
    desc: "Sharp, detailed images ready for ads, socials, and websites.",
  },
  {
    icon: Palette,
    title: "Multiple styles",
    desc: "Photorealistic, anime, 3D render, pixel art, and more.",
  },
  {
    icon: Zap,
    title: "Fast generation",
    desc: "Optimized pipeline for quick iterations and remixing.",
  },
  {
    icon: Download,
    title: "HD exports",
    desc: "Download in high resolution formats for commercial use.",
  },
  {
    icon: Layers,
    title: "Prompt reuse",
    desc: "Save and reuse prompts to keep your style consistent.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & reliable",
    desc: "Built-in guardrails and stable infrastructure.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">
          Built for AI image workflows
        </h2>
        <p className="mt-2 text-muted-foreground">
          Everything you need to ship a premium AI image product — without starting from scratch.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border bg-card p-6 shadow-sm"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border bg-background">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
