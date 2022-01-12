import React, { forwardRef } from 'react';

import { BaseControl, VisuallyHidden } from '../';
import { useInstanceId } from '../../hooks/';
import { classnames } from '../../utils/';

import './index.scss';

const RadioControl = (
	{
		label,
		checked,
		help,
		error,
		required,
		className,
		onChange,
		...props
	},
	ref
) => {
	const instanceId = useInstanceId(RadioControl);
	const id = `radio-control-${ instanceId }`;

	const onChangeValue = (event) => onChange(event.target.value);

	const describedby = [];

	if (!!error) {
		describedby.push(id + '__error');
	}

	if (!!help) {
		describedby.push(id + '__help');
	}

	return (
		<BaseControl
			id={ id }
			className={ classnames(className, 'c-radio-control') }
			help={ help }
			required={ required }
			error={ error }
		>
			<input
				className="c-radio-control__input"
				type="radio"
				id={ id }
				checked={ checked }
				onChange={ onChangeValue }
				aria-describedby={
					describedby.length > 0
						? describedby.join(' ')
						: undefined
				}
				aria-invalid={ !!error ? true : undefined }
				required={ !!required ? true : undefined }
				ref={ ref }
				{ ...props }
			/>
			<label
				className="c-radio-control__label"
				htmlFor={ id }
			>
				{ label }
				{ !!required && (
					<span className="c-control__required"></span>
				) }
			</label>
		</BaseControl>
	);
}

export default forwardRef(RadioControl);
