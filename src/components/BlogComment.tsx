import { Link } from './Link';
import type { Comment } from '../lib/Comment';

function Heart() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M1.633 2.796c.762-.837 1.85-1.297 3.127-1.297c1.164 0 2.407.55 3.24 1.626c.828-1.075 2.066-1.626 3.24-1.626c1.274 0 2.36.458 3.124 1.293c.756.828 1.136 1.962 1.136 3.22c0 2.166-1.113 3.909-2.522 5.264c-1.405 1.352-3.17 2.383-4.633 3.14a.75.75 0 0 1-.693-.002c-1.463-.765-3.228-1.788-4.633-3.133C1.61 9.93.5 8.193.5 6.013c0-1.255.378-2.389 1.133-3.217m1.109 1.01C2.287 4.306 2 5.053 2 6.013c0 1.624.816 2.996 2.057 4.184c1.146 1.098 2.6 1.985 3.945 2.705c1.335-.71 2.79-1.604 3.937-2.707C13.182 8.998 14 7.62 14 6.013c0-.963-.288-1.71-.744-2.21C12.808 3.314 12.14 3 11.24 3c-.976 0-2.093.628-2.527 1.95a.75.75 0 0 1-1.426 0C6.854 3.63 5.725 3 4.76 3c-.903 0-1.57.315-2.018.807"
				clipRule="evenodd"
			/>
		</svg>
	);
}

function MessagePrompt() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="m3 20l1.3-3.9C1.976 12.663 2.874 8.228 6.4 5.726c3.526-2.501 8.59-2.296 11.845.48c3.255 2.777 3.695 7.266 1.029 10.501S11.659 20.922 7.7 19z"
			/>
		</svg>
	);
}

function Repost() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
			<path
				fill="currentColor"
				d="M5 4a2 2 0 0 0-2 2v6H0l4 4l4-4H5V6h7l2-2zm10 4h-3l4-4l4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7z"
			/>
		</svg>
	);
}

function Send() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m5 12l-.604-5.437C4.223 5.007 5.825 3.864 7.24 4.535l11.944 5.658c1.525.722 1.525 2.892 0 3.614L7.24 19.466c-1.415.67-3.017-.472-2.844-2.028zm0 0h7"
			/>
		</svg>
	);
}

type BlogCommentProps = Comment;
export function BlogComment(props: BlogCommentProps) {
	const {
		replies,
		post: { uri, author, record, replyCount, repostCount, likeCount },
	} = props;

	const postParts = uri.split('/');
	const postId = postParts[postParts.length - 1];
	return (
		<>
			<div className="relative">
				{author.handle === 'wadamek.me' && (
					<span className="absolute -left-6 h-3/4 border-l-4 border-mirage-500 pl-2" />
				)}
				<div className="flex items-stretch gap-x-6">
					<img src={author.avatar} alt="" className="size-12 rounded-full" />
					<div className="flex flex-col justify-stretch">
						<Link href={`https://bsky.app/profile/${author.handle}`} className="leading-6">
							{author.displayName}
						</Link>
						<Link href={`https://bsky.app/profile/${author.handle}`} className="text-sm italic">
							@{author.handle}
						</Link>
					</div>
				</div>

				<div className="mt-2">
					<p className="indent-0">{record.text}</p>
				</div>
				<div className="mt-4 flex items-center justify-between text-sm">
					<div className="flex gap-x-4">
						<span className="flex items-center gap-x-1">
							<span className="text-mirage-500">
								<Heart />
							</span>
							{likeCount}
						</span>
						<span className="flex items-center gap-x-1">
							<span className="text-mirage-500">
								<Repost />
							</span>
							{repostCount}
						</span>
						<span className="flex items-center gap-x-1">
							<span className="text-mirage-500">
								<MessagePrompt />
							</span>
							{replyCount}
						</span>
					</div>
					<div>
						<span>
							{new Date(record.createdAt).toLocaleString('en-US', {
								month: 'short',
								day: 'numeric',
								year: 'numeric',
								hour: 'numeric',
								minute: 'numeric',
								hour12: true,
							})}
						</span>
					</div>
				</div>
				<div className="flex justify-end">
					<Link
						href={`https://bsky.app/profile/${author.handle}/post/${postId}`}
						className="flex items-center gap-x-1"
					>
						reply
						<Send />
					</Link>
				</div>
			</div>
			<div className="mt-8 pl-16">
				{replies.map((reply) => (
					<BlogComment key={reply.post.cid} {...reply} />
				))}
			</div>
		</>
	);
}
