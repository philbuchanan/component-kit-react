import React from 'react';

import {
	VisuallyHidden,
} from '../';
import { classnames } from '../../utils';

import './index.scss';

const BaseControl = ({
	id,
	label,
	hideLabelFromVision,
	help,
	error,
	isRequired,
	className,
	children,
}) => {
	return (
		<div
			className={ classnames('c-control', className) }
		>
			{ label && id && (
				hideLabelFromVision
					? (
						<VisuallyHidden
							as="label"
							htmlFor={ id }
						>
							{ label }
						</VisuallyHidden>
					) : (
						<label
							className="c-control__label"
							htmlFor={ id }
						>
							{ label }
							{ !!isRequired && (
								<span className="c-control__required">
									<VisuallyHidden as="span">
										Required
									</VisuallyHidden>
								</span>
							) }
						</label>
					)
			) }
			{ label && !id && (
				hideLabelFromVision
					? (
						<VisuallyHidden as="label">
							{ label }
						</VisuallyHidden>
					) : (
						<label>
							{ label }
						</label>
					)
			) }
			{ children }
			{ !!error && (
				<div
					id={ id ? id + '__error' : undefined }
					className="c-control__error"
				>
					{ error }
				</div>
			) }
			{ !!help && (
				<div
					id={ id ? id + '__help' : undefined }
					className="c-control__help"
				>
					{ help }
				</div>
			) }
		</div>
	);
};

export default BaseControl;
