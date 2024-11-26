type Author = {
	displayName: string;
	handle: string;
	avatar: string;
};

type Record = {
	createdAt: string;
	text: string;
	parent: {
		cid: string;
		uri: string;
	};
	root: {
		cid: string;
		uri: string;
	};
};

export type Comment = {
	post: {
		author: Author;
		record: Record;
		replyCount: number;
		repostCount: number;
		likeCount: number;
		quoteCount: number;
		uri: string;
		cid: string;
	};
	replies: Comment[];
};
