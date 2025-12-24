import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-foreground" />
          <span className="text-lg font-semibold">AI Image Studio</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost">Sign in</Button>
          <Button>Get Started</Button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4" variant="secondary">
            New • AI Image Generator
          </Badge>

          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
            Generate stunning images from text in seconds
          </h1>

          <p className="mt-5 text-pretty text-lg text-muted-foreground md:text-xl">
            Turn prompts into beautiful visuals. Fast, consistent, and ready for your next product or ad.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              Start generating
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View examples
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            No credit card needed • Free plan included
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            { title: "Photorealistic", desc: "High quality images for your brand and ads." },
            { title: "Multiple styles", desc: "Anime, cyberpunk, 3D, minimal, and more." },
            { title: "Fast workflow", desc: "Generate, save, and reuse prompts instantly." },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-card p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Image Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
