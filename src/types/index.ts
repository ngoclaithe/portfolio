export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "ERP" | "HRM" | "LMS" | "Data Platform" | "E-Commerce" | "IoT / Embedded" | "CRM";
  shortDescription: string;
  ndaNotice?: string;
  problem: string;
  solution: string;
  myRole: string[];
  keyChallenges: string[];
  architectureHighlights: string[];
  resultsAndImpact: string[];
  technologies: string[];
  liveUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyType?: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  impactHighlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface LiveProjectStatus {
  name: string;
  category: string;
  domain: string;
  url: string;
  description: string;
  status: "active" | "enterprise";
  stack: string[];
}

