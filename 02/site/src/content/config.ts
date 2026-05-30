import { defineCollection, z } from 'astro:content'

const chapter = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    /** the numeric order key (e.g., 0, 1, 2, …, 12) used for sorting and prev/next */
    order: z.number(),
    /** short blurb shown on the index page card */
    summary: z.string(),
    /** theorems numbered in this section, for the glossary page */
    theorems: z
      .array(z.object({ number: z.string(), title: z.string().optional() }))
      .optional(),
  }),
})

export const collections = { chapter }
