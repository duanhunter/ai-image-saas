import { Button } from "@/components/ui/button";
import { Hero } from "@/components/blocks/Hero";
import { Gallery } from "@/components/blocks/Gallery";
import { Features } from "@/components/blocks/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-foreground" />
          <span className="text-lg font-semibold">AI Image Studio</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground">
            Features
          </a>
          <a href="#pricing" className="hover:text-foreground">
            Pricing
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost">Sign in</Button>
          <Button>Get Started</Button>
        </div>
      </header>

      {/* Blocks */}
      <Hero />
      <Gallery />
      <Features />

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Image Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
            <a href="#" className="hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
