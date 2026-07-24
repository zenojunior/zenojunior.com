import { parse } from 'yaml';
import type { ResumeData } from './types';
// Root config.yaml is the single source of truth for email and links.
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
const data = parse(rawYaml) as ResumeData & { name: string };

data.title = data.name;
data.about = data.about.replace('{yearsOfExperience}', String(getYearsOfExperience()));

// Overlay the shared fields from the root config so they aren't duplicated.
const stripProtocol = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

data.contacts = [
  { label: stripProtocol(config.url), url: config.url },
  { label: stripProtocol(config.social.linkedin), url: config.social.linkedin, underline: true },
  { label: stripProtocol(config.social.github), url: config.social.github, underline: true },
  { label: config.email, url: `mailto:${config.email}`, underline: true },
];
if (data.phone) data.contacts.push({ label: data.phone });

export const resumeData: ResumeData = data;
