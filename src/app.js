import React, {
	useState,
} from 'react';
import './app.scss';

import { __ } from './i18n';
import {
	Button,
	ButtonBar,
	CheckboxControl,
	Fieldset,
	RadioControl,
	SelectControl,
	TextControl,
	TextareaControl,
} from './components';

const App = () => {
	const [textControlValue, setTextControlValue] = useState('Carolyn');

	return (
		<>
			<h1>{ __('Component Kit—React') }</h1>
			<ButtonBar>
				<Button
					variant="primary"
					onClick={ () => console.log('clicked') }
				>
					{ __('Primary Button') }
				</Button>
				<Button
					onClick={ () => console.log('clicked') }
				>
					{ __('Regular Button') }
				</Button>
				<Button
					isDestructive={ true }
					onClick={ () => console.log('clicked') }
				>
					{ __('Destructive Button') }
				</Button>
				<Button
					variant="link"
					onClick={ () => console.log('clicked') }
				>
					{ __('Link Button') }
				</Button>
				<Button
					variant="link"
					isDestructive={ true }
					onClick={ () => console.log('clicked') }
				>
					{ __('Reset') }
				</Button>
				<Button
					onClick={ () => console.log('clicked') }
					disabled={ true }
				>
					{ __('Disabled Button') }
				</Button>
			</ButtonBar>
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
			<TextareaControl
				label={ __('Textarea') }
				value={ __('The children groped their way back to the spring. The weary time dragged on; they slept again, and awoke famished and woe-stricken. Tom believed it must be Tuesday by this time.') }
				onChange={ (value) => console.log(value) }
				rows={ 8 }
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
