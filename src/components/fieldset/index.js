import React from 'react';

import { VisuallyHidden } from '../';
import { classnames } from '../../utils/';

import './index.scss';

const Fieldset = ({
	label,
	hideLabelFromVision,
	help,
	error,
	required,
	className,
	children,
}) => {
	return (
		<fieldset
			className={ classnames('c-fieldset', className) }
			help={ help }
		>
			{ label && (
				hideLabelFromVision
					? (
						<VisuallyHidden as="legend">
							{ label }
						</VisuallyHidden>
					) : (
						<legend className="c-fieldset__label">
							{ label }
							{ !!required && (
								<span className="c-control__required"></span>
							) }
						</legend>
					)
			) }
			{ children }
			{ !!error && (
				<div className="c-control__error">
					{ error }
				</div>
			) }
			{ !!help && (
				<div className="c-control__help">
					{ help }
				</div>
			) }
		</fieldset>
	);
}

export default Fieldset;
