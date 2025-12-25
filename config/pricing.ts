export const pricingConfig = {
  currency: "$",
  plans: [
    {
      name: "Free",
      price: 0,
      description: "Try it out and explore styles",
      features: [
        "10 generations / month",
        "Basic styles",
        "Standard resolution",
        "Community support",
      ],
      cta: "Get started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: 19,
      description: "For creators and indie teams",
      features: [
        "500 generations / month",
        "All styles + presets",
        "HD exports",
        "Faster queue",
        "Commercial use",
      ],
      cta: "Upgrade to Pro",
      highlighted: true,
    },
    {
      name: "Business",
      price: 49,
      description: "For teams and scaling brands",
      features: [
        "2000 generations / month",
        "Team seats",
        "Priority generation",
        "Shared prompt library",
        "Dedicated support",
      ],
      cta: "Contact sales",
      highlighted: false,
    },
  ],
};
