import React, {
	useState,
} from 'react';
import './app.scss';

import { __ } from './i18n';
import {
	CheckboxControl,
	Fieldset,
	RadioControl,
	SelectControl,
	TextControl,
} from './components';

const App = () => {
	const [textControlValue, setTextControlValue] = useState('Carolyn');

	return (
		<>
			<h1>{ __('Component Kit—React') }</h1>
			<TextControl
				label={ __('Text Control') }
				help={ __('This is help text for a text control.') }
				value={ textControlValue }
				onChange={ (value) => setTextControlValue(value) }
				required={ true }
			/>
			<TextControl
				type="password"
				label={ __('Password') }
				value="password123"
				onChange={ (value) => console.log(value) }
			/>
			<TextControl
				type="email"
				label={ __('Email Address') }
				help={ __('Your email address will be used to log in.') }
				placeholder="c.chapman@sterlingindustries.com"
				required={ true }
				error={ __('Your email address is required.') }
				value="cchapman@hmgc.com"
				onChange={ (value) => console.log(value) }
			/>
			<TextControl
				type="url"
				label={ __('URL') }
				help={ __('This is a read-only text field.') }
				value="https://reflectivity.io"
				onChange={ (value) => console.log(value) }
				readOnly={ true }
			/>
			<TextControl
				type="text"
				label={ __('Disabled') }
				help={ __('Usernames cannot be changed.') }
				value={ 'cchapman' }
				disabled={ true }
			/>
			<SelectControl
				label={ __('Select') }
				help={ __('The province you reside in.') }
				value="ON"
				options={ [
					{ label: __('Alberta'), value: 'AB' },
					{ label: __('British Columbia'), value: 'BC' },
					{ label: __('Ontario'), value: 'ON' },
				] }
				onChange={ (value) => console.log(value) }
			/>
			<Fieldset
				label={ __('Checkbox Group') }
				help={ __('This is fieldset help text.') }
			>
				<CheckboxControl
					label={ __('Security alerts related to your account') }
					help={ __('All account security alerts will be emailed to c.chapman@sterlingindustries.com.') }
					checked={ true }
					disabled={ true }
				/>
				<CheckboxControl
					label={ __('Product releases') }
					onChange={ (checked) => console.log(checked) }
				/>
			</Fieldset>
			<CheckboxControl
				label={ __('Terms & Conditions') }
				help={ __('This text helps describe the checkbox.') }
				error={ __('You must agree to the terms and conditions.') }
				required={ true }
				onChange={ (checked) => console.log(checked) }
			/>
			<Fieldset
				label={ __('Radio Group') }
			>
				<RadioControl
					label={ __('Email') }
					checked={ true }
					onChange={ (checked) => console.log(checked) }
				/>
				<RadioControl
					label={ __('Phone') }
					help={ __('You’ll only receive calls between 9 AM and 5 PM.') }
					onChange={ (checked) => console.log(checked) }
				/>
				<RadioControl
					label={ __('None') }
					onChange={ (checked) => console.log(checked) }
				/>
			</Fieldset>
		</>
	);
};

export default App;
