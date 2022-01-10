import React from 'react';

import './index.scss';

const VisuallyHidden = ({
	as = div,
	children,
	...props
}) => {
	const Component = as;

	return (
		<Component
			className="u-sr-only"
			{ ...props }
		>
			{ children }
		</Component>
	);
};

export default VisuallyHidden;
