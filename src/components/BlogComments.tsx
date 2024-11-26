import { useEffect, useState } from 'react';
import { BlogComment } from './BlogComment.tsx';
import type { Comment } from '../lib/Comment.ts';

type BlogCommentsProps = {
	blueskyPostId: string;
};
export function BlogComments(props: BlogCommentsProps) {
	const { blueskyPostId } = props;
	const uri = encodeURIComponent(`at://wadamek.me/app.bsky.feed.post/${blueskyPostId}`);
	const endpoint = `https://api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=${uri}`;

	const [comments, setComments] = useState<Comment[]>([]);
	useEffect(() => {
		async function fetchComments() {
			const response = await fetch(endpoint);
			const data = await response.json();
			setComments(data.thread?.replies || []);
		}

		void fetchComments();
	}, []);

	console.log(comments);
	return (
		<div className="flex flex-col">
			{comments.map((comment, index) => (
				<span key={comment.post.cid}>
					<BlogComment {...comment} />
					{index !== comments.length - 1 && (
						<hr className="mb-16 mt-6 w-6 border-dashed border-mirage-500" />
					)}
				</span>
			))}
		</div>
	);
}
