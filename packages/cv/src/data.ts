import { parse } from 'yaml';
import type { ResumeData } from './types';
import rawYaml from './resume.yaml?raw';

const data = parse(rawYaml) as ResumeData;

const yearsOfExperience = new Date().getFullYear() - 2014;
data.about = data.about.replace('{yearsOfExperience}', String(yearsOfExperience));

export const resumeData: ResumeData = data;
