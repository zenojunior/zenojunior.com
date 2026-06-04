import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      heroImage: z.optional(image()),
    }),
})

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      period: z.object({
        start: z.coerce.date(),
        end: z.coerce.date().optional(),
      }),
      tags: z.array(z.string()).default([]),
      url: z.string().optional(),
      repo: z.string().optional(),
      icon: z.string().optional(),
      // Override the listing badge. Defaults to 'open-source' when `repo` is set.
      source: z.enum(['open-source', 'private']).optional(),
      heroImage: z.optional(image()),
    }),
})

export const collections = { notes, projects }
