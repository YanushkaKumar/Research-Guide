export type ProjectType = "Business Website" | "Mobile App MVP" | "AI Feature" | "Automation Setup";

export interface LeadInput {
  name: string;
  whatsapp: string;
  projectType: ProjectType;
  description: string;
}

export interface LeadRecord extends LeadInput {
  id: string;
  createdAt: string;
}
