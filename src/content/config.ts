import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			publishedDate: z.date(),
			coverImage: z.object({ src: image(), alt: z.string() }),
			tags: z.array(z.string()),
		}),
})

export const collections = {
	posts: postsCollection,
}
