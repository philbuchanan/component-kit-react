import React from 'react';

import { classnames } from '../../utils/';

import './index.scss';

const ButtonBar = ({
	className,
	children,
}) => {
	return (
		<div className={ classnames('c-button-bar', classnames) }>
			{ children }
		</div>
	);
}

export default ButtonBar;
