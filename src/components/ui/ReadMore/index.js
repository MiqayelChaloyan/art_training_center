import React, { memo } from 'react';

const ReadMore = ({ children, isReadMore }) => {
	const text = children;
	return (
		<p className="text">
			{isReadMore ? text.slice(0, 200) + '...' : text}
		</p>
	);
};

const Content = ({ content, isReadMore }) => {
	return (
		<div>
			<ReadMore isReadMore={isReadMore}>
				{content}
			</ReadMore>
		</div>
	);
};

export default memo(Content);
