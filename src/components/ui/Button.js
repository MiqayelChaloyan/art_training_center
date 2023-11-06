import cn from 'classnames';

function Button({text, onClick, className}) {
	
	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};
	return (
		<button
			className={cn('btn', className)}
			onClick={handleClick}
		>
			<span>{text}</span>
		</button>
	);
}

export default Button;