const samples = [
  {
    title: "Cyberpunk Cat",
    prompt: "Cyberpunk cat astronaut, neon lights, cinematic, ultra detailed",
  },
  {
    title: "Luxury Product Shot",
    prompt: "Minimal luxury perfume bottle on marble, soft studio lighting",
  },
  {
    title: "Anime Portrait",
    prompt: "Anime portrait, soft pastel, cute girl, detailed eyes, bokeh",
  },
  {
    title: "3D Icon Set",
    prompt: "3D glossy icons, colorful, app style, high quality render",
  },
  {
    title: "Fashion Editorial",
    prompt: "High fashion editorial, dramatic lighting, 85mm, Vogue style",
  },
  {
    title: "Fantasy Landscape",
    prompt: "Epic fantasy landscape, castle, sunrise, ultra wide, painterly",
  },
  {
    title: "Food Photography",
    prompt: "Close-up ramen bowl, steam, cinematic lighting, photoreal",
  },
  {
    title: "Poster Design",
    prompt: "Retro synthwave poster, bold typography, neon gradient",
  },
  {
    title: "Architecture",
    prompt: "Modern architecture, glass building, sunset reflections, clean lines",
  },
  {
    title: "Game Asset",
    prompt: "Game asset concept art, sci-fi weapon, detailed, realistic",
  },
  {
    title: "Nature Macro",
    prompt: "Macro photo of dewdrops on leaf, ultra sharp, natural light",
  },
  {
    title: "Pixel Art",
    prompt: "Pixel art character, RPG style, vibrant palette, 32x32",
  },
];

export function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Gallery that converts
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Show what your AI can do. Hover to see prompts. This block is designed
            to build trust quickly.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          12 curated examples • 1024×1024
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {samples.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border bg-card shadow-sm"
          >
            {/* 图片占位：Day3换成真实图片 */}
            <div className="aspect-square w-full bg-gradient-to-br from-muted to-background" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="rounded-xl border bg-background/90 p-3 backdrop-blur">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.prompt}
                </p>
              </div>
            </div>

            {/* Small label */}
            <div className="absolute left-3 top-3 rounded-full border bg-background/80 px-3 py-1 text-xs backdrop-blur">
              Sample
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
