import React, {
	useState,
} from 'react';
import './app.scss';

import { __ } from './i18n';
import {
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
				placeholder="cchapman@hmgc.com"
				isRequired={ true }
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
				onChange={ (value) => console.log(value) }
				disabled={ true }
			/>
		</>
	);
};

export default App;
