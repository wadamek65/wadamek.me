import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			publishedTime: z.date(),
			modifiedTime: z.date(),
			coverImage: z.object({ src: image(), alt: z.string() }),
			tags: z.array(z.string()),
		}),
})

export const collections = {
	posts: postsCollection,
}
