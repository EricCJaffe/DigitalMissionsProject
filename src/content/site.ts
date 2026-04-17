export type Service = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  description: string;
  emphasis: string;
  bullets: string[];
  outcomes: string[];
  accent: "blue" | "teal" | "dark";
};

export type Industry = {
  slug: string;
  name: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    shortName: "Automation",
    eyebrow: "Highly efficient systems for overstretched teams",
    description:
      "We build automations that remove repetitive admin from your staff so they can stay focused on people, ministry, and community work.",
    emphasis:
      "This is especially valuable for nonprofits and churches trying to do more with limited headcount and discounted operating budgets.",
    bullets: [
      "Volunteer and donor follow-up sequences",
      "Intake forms, referral pipelines, and reminders",
      "Internal admin workflows that cut manual work",
    ],
    outcomes: [
      "Less time buried in repetitive tasks",
      "Faster response times for people you serve",
      "Clearer follow-through without adding staff",
    ],
    accent: "blue",
  },
  {
    slug: "custom-apps-websites",
    name: "Custom Apps & Websites",
    shortName: "Custom Builds",
    eyebrow: "Digital platforms that support the mission",
    description:
      "We create websites, portals, and digital tools that help mission-driven organizations communicate clearly, raise support, and move people into action.",
    emphasis:
      "Instead of bloated systems and expensive rebuilds, we focus on practical solutions that stay affordable and effective.",
    bullets: [
      "Websites for churches, nonprofits, and community initiatives",
      "Custom forms, dashboards, and simple internal tools",
      "Clear donation, event, and volunteer pathways",
    ],
    outcomes: [
      "A stronger first impression online",
      "Better engagement from supporters and visitors",
      "Tools built around your real workflows",
    ],
    accent: "teal",
  },
  {
    slug: "ai-training-workshops",
    name: "AI Training & Workshops",
    shortName: "AI Training",
    eyebrow: "Practical AI without the hype",
    description:
      "We train ministry and nonprofit teams to use AI in ways that actually save time, increase clarity, and support their work responsibly.",
    emphasis:
      "The goal is not novelty. The goal is to give your team efficient tools they can use right away without losing the human side of the mission.",
    bullets: [
      "Team workshops for leaders, staff, and volunteers",
      "Prompt systems for research, writing, and planning",
      "Simple policies and workflows that fit your context",
    ],
    outcomes: [
      "More capacity with the same team",
      "Faster content, planning, and internal prep",
      "Confidence using AI in a healthy way",
    ],
    accent: "blue",
  },
  {
    slug: "fractional-digital-strategy",
    name: "Fractional Digital Strategy",
    shortName: "Digital Strategy",
    eyebrow: "Senior guidance without a full-time hire",
    description:
      "We help leadership teams make better digital decisions, prioritize the right projects, and build momentum without wasting budget.",
    emphasis:
      "For organizations serving the community, stewardship matters. We help you choose the right systems and avoid expensive noise.",
    bullets: [
      "Roadmaps for websites, outreach, automation, and AI",
      "Project sequencing and vendor guidance",
      "Strategy support for growth, giving, and engagement",
    ],
    outcomes: [
      "Better decisions with less guesswork",
      "Healthier use of limited resources",
      "A digital plan tied to real mission goals",
    ],
    accent: "dark",
  },
];

export const industries: Industry[] = [
  {
    slug: "nonprofits",
    name: "Nonprofits",
    description:
      "We help nonprofit teams improve clarity, lower friction, and stretch each dollar further with highly efficient digital systems.",
    bullets: [
      "Supporter journeys that are easier to manage",
      "Donation, volunteer, and program pathways with less admin",
      "Technology choices that respect real budget constraints",
    ],
  },
  {
    slug: "churches",
    name: "Churches",
    description:
      "We help churches reach more neighbors without gimmicks, keeping the focus on ministry, local impact, and faithful follow-through.",
    bullets: [
      "Outreach funnels and next-step pathways",
      "Event, prayer, and volunteer engagement systems",
      "Digital support that feels pastoral instead of corporate",
    ],
  },
  {
    slug: "faith-based-businesses",
    name: "Faith-Based Businesses",
    description:
      "We partner with faith-driven businesses serving their communities and wanting digital systems that are efficient, credible, and mission-aligned.",
    bullets: [
      "Clearer online positioning and service pages",
      "Automation for lead flow and client communication",
      "Practical AI and web tools that save time",
    ],
  },
];

export const navigation = [
  {
    label: "Services",
    href: "/services/workflow-automation",
    items: services.map((service) => ({
      label: service.name,
      href: `/services/${service.slug}`,
      description: service.eyebrow,
    })),
  },
  {
    label: "Industries",
    href: "/industries/churches",
    items: industries.map((industry) => ({
      label: industry.name,
      href: `/industries/${industry.slug}`,
      description: industry.description,
    })),
  },
  {
    label: "Our Process",
    href: "/our-process",
  },
  {
    label: "Resources",
    href: "/grant",
    items: [
      {
        label: "Grant Support",
        href: "/grant",
        description: "Guidance for grants, outreach funding, and digital growth support.",
      },
      {
        label: "Submit Project",
        href: "/submit-project",
        description: "Share your project idea and let us know what kind of support you need.",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export const processSteps = [
  {
    title: "Listen First",
    description:
      "We start with your mission, your team, your constraints, and the people you are trying to serve.",
  },
  {
    title: "Clarify Priorities",
    description:
      "We identify the highest-leverage digital work so you are not spending money or attention in the wrong place.",
  },
  {
    title: "Build Efficiently",
    description:
      "We keep solutions lean, useful, and maintainable instead of overbuilding for appearance.",
  },
  {
    title: "Equip Your Team",
    description:
      "We train and document what matters so your staff can use the systems confidently after launch.",
  },
];

export const donateContent = {
  title: "Support The Mission Of Digital Missions Project",
  description:
    "Your donation helps further the mission of Digital Missions Project by expanding our ability to serve nonprofits, churches, and faith-based organizations with practical digital support.",
  bullets: [
    "Support technology projects that help mission-driven organizations serve more people",
    "Help create capacity for churches and nonprofits that may not be able to fund everything on their own",
    "Strengthen the long-term mission of this project and the organizations it supports",
  ],
};

export const grantContent = {
  title: "Grant Support For Churches And Nonprofits That Need Help Moving Forward",
  description:
    "Some churches and nonprofits are trying to move important work forward but do not have the financial capacity to cover the full cost. In some cases, partner support and a portion of our service proceeds allow us to offer significantly discounted, and sometimes even free, help.",
  bullets: [
    "Some partner support helps offset project costs for qualifying organizations",
    "A portion of our service revenue is set aside to help churches and nonprofits with financial need",
    "The first step is to submit your project so we can understand the need, the current state of your ministry or organization, and whether we may be able to help",
  ],
};

// TODO: replace placeholder metrics with real numbers when available.
export const homeStats: { value: number; suffix?: string; label: string }[] = [
  { value: 24, suffix: "+", label: "Ministries and nonprofits supported" },
  { value: 1200, suffix: "+", label: "Hours of admin work automated away" },
  { value: 98, suffix: "%", label: "Projects delivered on or under budget" },
  { value: 40, suffix: "k+", label: "Community members reached through builds" },
];

// TODO: replace placeholder quotes with real testimonials when collected.
export const homeTestimonials = [
  {
    quote:
      "They actually listened before proposing anything. By week three we had a volunteer intake system that cut our follow-up time in half.",
    name: "Placeholder — Church Operations Lead",
    title: "Mid-size congregation, Midwest",
  },
  {
    quote:
      "We had quotes that were three times higher. Their work was lean, well documented, and our team can actually maintain it without hand-holding.",
    name: "Placeholder — Executive Director",
    title: "Community food nonprofit",
  },
  {
    quote:
      "The AI workshop paid for itself in the first week. Our comms lead is now drafting newsletters in a fraction of the time.",
    name: "Placeholder — Communications Director",
    title: "Regional faith-based nonprofit",
  },
  {
    quote:
      "They treated our budget like it was their own. Zero pressure to buy tools we did not need.",
    name: "Placeholder — Pastor",
    title: "Multi-site church",
  },
  {
    quote:
      "Our donor follow-ups used to get lost. Now they happen automatically with the right tone — like we wrote them ourselves.",
    name: "Placeholder — Development Lead",
    title: "Youth-focused nonprofit",
  },
];

export const homeImpact: {
  tag: string;
  title: string;
  blurb: string;
  metric?: string;
  accent: "blue" | "teal" | "dark";
  span: "wide" | "tall" | "default";
}[] = [
  {
    tag: "Automation",
    title: "Volunteer intake pipeline",
    blurb:
      "Replaced a 6-step manual intake with a single form, auto-routed by role and availability.",
    metric: "~12 staff hours/week reclaimed",
    accent: "blue",
    span: "wide",
  },
  {
    tag: "Website",
    title: "Multi-site church rebuild",
    blurb:
      "Unified four campus sites into one system with clear next-step pathways for first-time visitors.",
    metric: "3.2× first-time visitor conversions",
    accent: "teal",
    span: "tall",
  },
  {
    tag: "AI Training",
    title: "Staff workshop series",
    blurb:
      "A four-week program giving a nonprofit communications team practical AI habits.",
    metric: "60% faster newsletter turnaround",
    accent: "dark",
    span: "default",
  },
  {
    tag: "Internal Tool",
    title: "Grant-tracking dashboard",
    blurb:
      "A lightweight internal tool replacing five spreadsheets across two departments.",
    metric: "Deadlines never missed since launch",
    accent: "blue",
    span: "default",
  },
  {
    tag: "Donor Flow",
    title: "Automated giving follow-up",
    blurb:
      "Pastoral-voice sequences triggered by first-time gifts, recurring starts, and lapsed donors.",
    metric: "2× repeat giving rate",
    accent: "teal",
    span: "wide",
  },
];

export const homeFaq: { q: string; a: string }[] = [
  {
    q: "How much does a typical project cost?",
    a: "It depends on scope, but most ministry and nonprofit projects land in the low-to-mid four figures — and sometimes lower for qualifying organizations through partner or grant support. We always share an honest, fixed estimate up front.",
  },
  {
    q: "How long does a project usually take?",
    a: "Small automations and focused builds often ship in 2–4 weeks. Larger custom sites or multi-phase rollouts typically run 6–10 weeks. We optimize for shipping something useful early, then iterating.",
  },
  {
    q: "Do you only work with religious organizations?",
    a: "No — we partner with nonprofits, churches, and faith-based businesses. The common thread is mission-driven work where budget stewardship matters.",
  },
  {
    q: "What if we are not sure what we need?",
    a: "That is the most common starting point. The first conversation is free and focused on clarifying priorities. If we are not the right fit, we will say so and point you somewhere better.",
  },
  {
    q: "Can you help us qualify for grant or discounted support?",
    a: "Possibly. A portion of our service revenue, along with partner support, lets us offer significantly reduced rates — and occasionally free help — to qualifying churches and nonprofits. Submit a project and we will review together.",
  },
];
