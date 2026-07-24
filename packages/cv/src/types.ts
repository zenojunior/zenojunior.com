export interface ResumeData {
  title: string;
  location: string;
  phone?: string;
  about: string;
  contacts: Contact[];
  skills: { group: string; items: string }[];
  languages: string[];
  experiences: Experience[];
  notableProjects?: NotableProject[];
  formation: Experience[];
}

export interface Contact {
  label: string;
  url?: string;
  underline?: boolean;
}

export interface NotableProject {
  title: string;
  description: string;
  link?: string;
}

export interface Period {
  start?: string;
  end?: string;
  hours?: number;
}

export interface Role {
  title: string;
  period: Period;
  description?: string;
  items?: string[];
}

export interface Experience {
  title: string;
  company: {
    name: string;
    slug: string;
  };
  period: Period;
  description?: string;
  items?: string[];
  roles?: Role[];
}
