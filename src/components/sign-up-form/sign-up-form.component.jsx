import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { SignUpContainer } from './sign-up-form.styles';
import { register } from '../../utils/api/auth/register'; // Adjust the path to your register.js as necessary

const defaultFormFields = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { name, email, password, confirmPassword } = formFields;
	const navigate = useNavigate();

	const resetFormFields = () => setFormFields(defaultFormFields);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		if (!email.endsWith('@noroff.no') && !email.endsWith('@stud.noroff.no')) {
			alert('Only Noroff email addresses are allowed.');
			return;
		}

		try {
			const data = await register(name, email, password);
			console.log('Registration successful', data);
			resetFormFields();
			navigate('/explore');
		} catch (error) {
			alert(`Registration failed: ${error.message}`);
			console.error('Registration request failed', error);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignUpContainer>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput label='Name' type='text' required onChange={handleChange} name='name' value={name} />
				<FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} pattern='^[\w.-]+@(stud\.)?noroff\.no$' title='Only Noroff email addresses are allowed.' />
				<FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />
				<FormInput label='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
				<Button type='submit'>Sign Up</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;
