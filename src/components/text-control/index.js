import React, { forwardRef } from 'react';

import { BaseControl } from '../';
import { useInstanceId } from '../../hooks/';

const TextControl = (
	{
		label,
		hideLabelFromVision,
		value,
		help,
		error,
		isRequired,
		className,
		onChange,
		type = 'text',
		...props
	},
	ref
) => {
	const instanceId = useInstanceId(TextControl);
	const id = `text-control-${ instanceId }`;

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
			className={ className }
			label={ label }
			hideLabelFromVision={ hideLabelFromVision }
			help={ help }
			isRequired={ isRequired }
			error={ error }
		>
			<input
				className="c-control__input"
				type={ type }
				id={ id }
				value={ value }
				onChange={ onChangeValue }
				aria-describedby={
					describedby.length > 0
						? describedby.join(' ')
						: undefined
				}
				aria-invalid={ !!error ? true : undefined }
				ref={ ref }
				{ ...props }
			/>
		</BaseControl>
	);
}

export default forwardRef(TextControl);
