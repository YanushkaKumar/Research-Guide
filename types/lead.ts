export type ProjectType = "Machine Learning" | "Mobile Application" | "Web Application" | "DevOps";

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
