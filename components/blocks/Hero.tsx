import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-12 md:grid-cols-2 md:pt-16">
      {/* Left */}
      <div>
        <Badge className="mb-4" variant="secondary">
          New • AI Image Generator
        </Badge>

        <h1 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
          Generate stunning images from text in seconds
        </h1>

        <p className="mt-5 text-pretty text-lg text-muted-foreground md:text-xl">
          Create photorealistic, anime, 3D, and stylized visuals. Perfect for ads,
          product mockups, and content — fast and consistent.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="lg">Start generating</Button>
          <Button size="lg" variant="outline">
            View examples
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
          <span className="rounded-full border bg-card px-3 py-1">No credit card</span>
          <span className="rounded-full border bg-card px-3 py-1">Free plan</span>
          <span className="rounded-full border bg-card px-3 py-1">HD exports</span>
          <span className="rounded-full border bg-card px-3 py-1">Commercial use</span>
        </div>
      </div>

      {/* Right */}
      <div className="relative">
        <div className="rounded-2xl border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Preview</p>
            <span className="text-xs text-muted-foreground">1024×1024</span>
          </div>

          <div className="mt-3 overflow-hidden rounded-xl border">
            {/* 用渐变占位，Day3会换成真实示例图或组件 */}
            <div className="aspect-square w-full bg-gradient-to-br from-muted to-background" />
          </div>

          <div className="mt-4 rounded-xl border bg-background p-3">
            <p className="text-xs text-muted-foreground">Prompt</p>
            <p className="mt-1 text-sm">
              “A cyberpunk cat astronaut, neon lights, cinematic, ultra-detailed”
            </p>
          </div>

          <div className="mt-4 flex gap-2">
            <Button className="w-full" variant="secondary">
              Remix
            </Button>
            <Button className="w-full">Download</Button>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-6 -top-6 hidden h-20 w-20 rounded-2xl bg-foreground/5 md:block" />
        <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-2xl bg-foreground/5 md:block" />
      </div>
    </section>
  );
}
