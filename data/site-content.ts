import type { ProjectType } from "@/types/lead";

export type ServiceIcon = "brain" | "smartphone" | "globe" | "infinity";

export const services: { title: string; description: string; icon: ServiceIcon }[] = [
  {
    title: "Business Websites",
    description: "Fast, conversion-first websites for small businesses with clear service pages, inquiry flows, and performance optimization.",
    icon: "brain",
  },
  {
    title: "Mobile App MVP",
    description: "Lean mobile MVP development for service startups that need to validate ideas quickly without burning budget.",
    icon: "smartphone",
  },
  {
    title: "AI Feature Integration",
    description: "Practical AI features like chat assistants, smart search, and recommendation logic integrated into existing products.",
    icon: "globe",
  },
  {
    title: "Automation + DevOps",
    description: "Deployment pipelines, cloud setup, monitoring, and workflow automation to reduce manual effort and downtime.",
    icon: "infinity",
  },
];

export const strengths = [
  "Clear weekly updates and transparent progress tracking",
  "Design-first screens before development begins",
  "Clean codebase handover with documentation",
  "Affordable engagement plans for part-time execution",
];

export const processSteps = [
  "Discovery call and scope locking",
  "Wireframe, UI direction, and implementation plan",
  "Build with milestone demos and feedback loops",
  "Deployment, training, and support window",
];

export const pricingPlans = [
  {
    name: "Starter",
    subtitle: "Single Service Site",
    price: "LKR 35,000+",
    features: [
      "Up to 5 responsive pages",
      "Lead capture form with WhatsApp flow",
      "Speed and SEO basics",
    ],
    featured: false,
  },
  {
    name: "Growth",
    subtitle: "Business App + Website",
    price: "LKR 85,000+",
    features: [
      "Website plus dashboard or booking module",
      "Database and admin panel",
      "Cloud deployment and monitoring",
      "30-day support window",
    ],
    featured: true,
  },
  {
    name: "Scale",
    subtitle: "Automation + AI",
    price: "LKR 140,000+",
    features: [
      "AI feature integration",
      "CI/CD and release automation",
      "Analytics and reporting stack",
      "Priority delivery lane",
    ],
    featured: false,
  },
];

export const testimonials = [
  {
    name: "Tharushi R.",
    role: "Salon Owner",
    quote:
      "Our bookings doubled after the new website launch. The process was simple and every change request was handled fast.",
  },
  {
    name: "Nadeesh K.",
    role: "Tuition Center Manager",
    quote:
      "The admin dashboard gave us full control over inquiries and schedules. Reliable delivery and clean communication.",
  },
  {
    name: "Ayomi L.",
    role: "Startup Co-Founder",
    quote:
      "We started with a simple MVP and now have an automated release setup. Great value for a part-time partnership.",
  },
];

export const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/contact" },
];

export const projectTypes: ProjectType[] = [
  "Business Website",
  "Mobile App MVP",
  "AI Feature",
  "Automation Setup",
];
