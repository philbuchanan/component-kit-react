import React, { forwardRef } from 'react';

import { BaseControl, VisuallyHidden } from '../';
import { useInstanceId } from '../../hooks/';
import { classnames } from '../../utils/';

import './index.scss';

const CheckboxControl = (
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
	const instanceId = useInstanceId(CheckboxControl);
	const id = `checkbox-control-${ instanceId }`;

	const onChangeValue = (event) => onChange(event.target.value);

	const describedby = []

	if (!!error) {
		describedby.push(id + '__error');
	}

	if (!!help) {
		describedby.push(id + '__help');
	}

	return (
		<BaseControl
			id={ id }
			className={ classnames(className, 'c-checkbox-control') }
			help={ help }
			required={ required }
			error={ error }
		>
			<input
				className="c-checkbox-control__input"
				type="checkbox"
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
				className="c-checkbox-control__label"
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

export default forwardRef(CheckboxControl);
