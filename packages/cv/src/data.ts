import { parse } from 'yaml';
import type { ResumeData } from './types';
// Root config.yaml is the single source of truth for name, email and links.
import configRaw from '../../../config.yaml?raw';
import { getYearsOfExperience } from './experience';
import rawYaml from './resume.yaml?raw';

interface RootConfig {
  name: string;
  email: string;
  url: string;
  social: { github: string; linkedin: string };
}

const config = parse(configRaw) as RootConfig;
const data = parse(rawYaml) as ResumeData;

data.about = data.about.replace('{yearsOfExperience}', String(getYearsOfExperience()));

// Overlay the shared fields from the root config so they aren't duplicated.
const stripProtocol = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

data.title = config.name;
data.personal = [...data.personal, { email: config.email }];
data.links = [
  { label: stripProtocol(config.url), url: config.url },
  { label: stripProtocol(config.social.linkedin), url: config.social.linkedin },
  { label: stripProtocol(config.social.github), url: config.social.github },
];

export const resumeData: ResumeData = data;
