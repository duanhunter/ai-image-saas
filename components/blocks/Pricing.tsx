import { pricingConfig } from "@/config/pricing";
import { Button } from "@/components/ui/button";

export function Pricing() {
  const { currency, plans } = pricingConfig;

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">Pricing</h2>
        <p className="mt-2 text-muted-foreground">
          Start free. Upgrade when you’re ready for faster generations and HD exports.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={[
              "rounded-2xl border bg-card p-6 shadow-sm",
              plan.highlighted ? "border-foreground/20 ring-2 ring-foreground/10" : "",
            ].join(" ")}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              {plan.highlighted && (
                <span className="rounded-full border bg-background px-3 py-1 text-xs">
                  Most Popular
                </span>
              )}
            </div>

            <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl font-bold">
                {currency}
                {plan.price}
              </span>
              <span className="text-sm text-muted-foreground">/mo</span>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button className="w-full" variant={plan.highlighted ? "default" : "secondary"}>
                {plan.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
