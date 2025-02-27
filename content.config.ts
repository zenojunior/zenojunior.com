import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    notes: defineCollection({
      type: 'page',
      source: 'notes/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        date: z.string(),
      })
    }),
    about: defineCollection({
      type: 'page',
      source: '*.md',
    }),
    resume: defineCollection({
      type: 'data',
      source: '*.yaml',
      schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        about: z.string(),
        personal: z.array(z.record(z.string(), z.string())),
        skills: z.array(z.string()),
        motivators: z.array(z.string()),
        languages: z.array(z.string()),
        links: z.array(z.object({
          label: z.string(),
          url: z.string()
        })),
        experiences: z.array(z.object({
          title: z.string(),
          company: z.object({
            name: z.string(),
            slug: z.string()
          }),
          period: z.object({
            start: z.string(),
            end: z.string().optional()
          }),
          remoteWork: z.boolean().optional(),
          items: z.array(z.string()).optional(),
          description: z.string().optional()
        })),
        formation: z.array(z.object({
          title: z.string(),
          company: z.object({
            name: z.string(),
            slug: z.string()
          }),
          period: z.object({
            start: z.string(),
            end: z.string(),
            hours: z.number().optional()
          })
        }))
      })
    })
  }
})
