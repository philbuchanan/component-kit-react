import React, { forwardRef } from 'react';

import { BaseControl } from '../';
import { useInstanceId } from '../../hooks/';

const TextareaControl = (
	{
		label,
		hideLabelFromVision,
		value,
		help,
		error,
		required,
		className,
		onChange,
		...props
	},
	ref
) => {
	const instanceId = useInstanceId(TextareaControl);
	const id = `textarea-control-${ instanceId }`;

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
			<textarea
				className="c-control__input"
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
			/>
		</BaseControl>
	);
}

export default forwardRef(TextareaControl);
