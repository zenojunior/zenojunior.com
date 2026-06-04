import { parse } from 'yaml'
// Root config.yaml is the single source of truth for personal/site info.
import raw from '../../../config.yaml?raw'

export interface SiteConfig {
  name: string
  shortName: string
  role: string
  description: string
  url: string
  email: string
  social: {
    github: string
    linkedin: string
  }
  comments?: {
    repo: string
    repoId: string
    category: string
    categoryId: string
  }
}

export const config = parse(raw) as SiteConfig
