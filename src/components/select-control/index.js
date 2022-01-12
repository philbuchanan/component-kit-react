import React, { forwardRef } from 'react';

import { BaseControl } from '../';
import { useInstanceId } from '../../hooks/';

import './index.scss';

const SelectControl = (
	{
		label,
		hideLabelFromVision,
		value,
		options = [],
		help,
		error,
		required,
		className,
		onChange,
		...props
	},
	ref
) => {
	const instanceId = useInstanceId(SelectControl);
	const id = `select-control-${ instanceId }`;

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
			className={ className }
			label={ label }
			hideLabelFromVision={ hideLabelFromVision }
			help={ help }
			required={ required }
			error={ error }
		>
			<select
				className="c-control__input c-select-control__input"
				id={ id }
				value={ value }
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
			>
				{ options.map((option, index) => {
					const key = option.id || option.value;

					return (
						<option
							key={ key }
							value={ option.value }
							disabled={ option.disabled }
						>
							{ option.label }
						</option>
					);
				}) }
			</select>
		</BaseControl>
	);
}

export default forwardRef(SelectControl);
