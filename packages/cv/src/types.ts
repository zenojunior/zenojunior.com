export interface ResumeData {
  title: string;
  subtitle: string;
  about: string;
  personal: Record<string, string>[];
  skills: { group: string; items: string }[];
  languages: string[];
  links: { label: string; url: string }[];
  experiences: Experience[];
  notableProjects?: NotableProject[];
  formation: Experience[];
}

export interface NotableProject {
  title: string;
  period?: Period;
  description: string;
  stack?: string;
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
    logo?: boolean;
    logoStyle?: string;
  };
  period: Period;
  description?: string;
  items?: string[];
  remoteWork?: boolean;
  roles?: Role[];
}
