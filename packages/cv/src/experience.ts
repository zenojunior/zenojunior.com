import { parse } from 'yaml';
// Root config.yaml is the single source of truth; careerStartYear drives the
// experience math so we never hand-edit a "12+" anywhere.
import configRaw from '../../../config.yaml?raw';

interface ExperienceConfig {
  careerStartYear: number;
}

const { careerStartYear } = parse(configRaw) as ExperienceConfig;

/**
 * Years of professional experience, derived from `careerStartYear` in config.yaml.
 * Recomputed every build, so it stays correct as years pass without touching content.
 */
export function getYearsOfExperience(now: Date = new Date()): number {
  return now.getFullYear() - careerStartYear;
}

export { careerStartYear };
