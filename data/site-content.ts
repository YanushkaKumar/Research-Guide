import type { ProjectType } from "@/types/lead";

export type ServiceIcon = "brain" | "smartphone" | "globe" | "infinity";

export const services: { title: string; description: string; icon: ServiceIcon }[] = [
  {
    title: "Machine Learning",
    description: "Predictive analytics, classification, recommendation systems, and practical AI project delivery.",
    icon: "brain",
  },
  {
    title: "Mobile Application",
    description: "Android and cross-platform apps with clean UX, scalable APIs, and production-ready quality.",
    icon: "smartphone",
  },
  {
    title: "Web Application",
    description: "Responsive web systems, dashboards, admin panels, and robust backend integrations.",
    icon: "globe",
  },
  {
    title: "DevOps",
    description: "CI/CD, Docker workflows, cloud deployment, and observability for stable releases.",
    icon: "infinity",
  },
];

export const strengths = [
  "Real-world project architecture",
  "Industry-level coding standards",
  "On-time delivery",
  "Full support until submission",
];

export const processSteps = [
  "Discuss requirement",
  "Plan solution",
  "Develop project",
  "Deliver & support",
];

export const pricingPlans = [
  {
    name: "Basic",
    subtitle: "Guidance",
    price: "LKR 15,000+",
    features: [
      "Topic and architecture guidance",
      "Documentation support",
      "Report writing guidance",
    ],
    featured: false,
  },
  {
    name: "Standard",
    subtitle: "Project + Support",
    price: "LKR 45,000+",
    features: [
      "Project implementation",
      "Documentation support",
      "Deployment help",
      "Report writing guidance",
    ],
    featured: true,
  },
  {
    name: "Premium",
    subtitle: "Full Solution + Report Help",
    price: "LKR 75,000+",
    features: [
      "Full project delivery",
      "Deployment help",
      "Research report assistance",
      "Priority support",
    ],
    featured: false,
  },
];

export const testimonials = [
  {
    name: "Nipuni S.",
    role: "BICT Undergraduate",
    quote:
      "The project was structured like an industry product. I got excellent feedback from my supervisors and delivered on time.",
  },
  {
    name: "Dulaj P.",
    role: "Software Engineering Student",
    quote:
      "Clear communication and professional execution. The architecture and documentation made my final presentation easy.",
  },
  {
    name: "Rashmi K.",
    role: "Computing Student",
    quote:
      "From planning to final submission, everything was smooth. The support after delivery was very reliable.",
  },
];

export const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/contact" },
];

export const projectTypes: ProjectType[] = [
  "Machine Learning",
  "Mobile Application",
  "Web Application",
  "DevOps",
];
