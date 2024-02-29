import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { SignInContainer, ButtonContainer } from './sign-in-form.styles';
// import { API_BASE_URL } from '../../utils/api/api-config';
import { useAuth } from '../../utils/api/auth/login';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;
	const { login } = useAuth();
	const navigate = useNavigate();

	const resetFormFields = () => setFormFields(defaultFormFields);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!(email.endsWith('@noroff.no') || email.endsWith('@stud.noroff.no'))) {
			alert('You must use a Noroff email to log in.');
			return;
		}

		try {
			const userData = await login(email, password);
			console.log('Login successful', userData);
			// Navigate to the desired route after successful login
			navigate('/explore');
			resetFormFields();
		} catch (error) {
			// Handle errors, such as incorrect credentials or fetch errors
			alert('Login failed: ' + (error.message || 'An error occurred during login.'));
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignInContainer>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='email'
					required
					pattern='^[\w\-.]+@((stud\.)?noroff\.no)$'
					title='Only Noroff domains (noroff.no and stud.noroff.no) are allowed to log in.'
					onChange={handleChange}
					name='email'
					value={email}
				/>

				<FormInput label='Password' type='password' name='password' required autoComplete='current-password' onChange={handleChange} value={password} />

				<ButtonContainer>
					<Button type='submit'>Sign In</Button>
				</ButtonContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
