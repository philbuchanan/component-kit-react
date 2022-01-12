import React from 'react';

import { classnames } from '../../utils/';

import './index.scss';

const Button = ({
	className,
	variant,
	isDestructive,
	isPressed,
	href,
	onClick,
	disabled,
	children,
}) => {
	const Tag = href !== undefined && !disabled ? 'a' : 'button';
	const tagProps = Tag === 'a'
		? { href }
		: {
			disabled: disabled,
			'aria-pressed': isPressed,
		};

	return (
		<Tag
			{ ...tagProps }
			className={ classnames('c-button', {
				'is-primary': variant === 'primary',
				'is-link': variant === 'link',
				'is-destructive': isDestructive,
				'is-pressed': isPressed,
			}, className) }
		>
			{ children }
		</Tag>
	);
}

export default Button;
