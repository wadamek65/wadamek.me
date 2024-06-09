import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'

const parser = new MarkdownIt()

export async function GET(context) {
	const posts = await getCollection('posts')

	return rss({
		stylesheet: '/rss-styles.xsl',
		title: 'wadamek65’s Blog',
		description: 'A blog featuring mainly software engineering topics.',
		site: context.site,
		customData: `<language>en-us</language>`,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.publishedDate,
			description: post.data.description,
			link: `/blog/${post.slug}/`,
			content: sanitizeHtml(parser.render(post.body), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
			}),
		})),
	})
}
