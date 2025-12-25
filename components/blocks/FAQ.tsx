import { faqConfig } from "@/config/faq";
export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
        <p className="mt-2 text-muted-foreground">
          Answers to common questions about our AI image generator.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {faqConfig.map((item) => (
          <div key={item.q} className="rounded-2xl border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold">{item.q}</p>
            <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
