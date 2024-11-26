import { cn } from '../lib/cn';

export function Link(props) {
	const { children } = props;
	return (
		<a
			{...props}
			className={cn(
				'text-puerto-rico-600 decoration-puerto-rico-300 decoration-2 underline-offset-4 hover:text-puerto-rico-300 hover:underline focus:underline',
				props.className,
			)}
		>
			{children}
		</a>
	);
}
