import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../button/button.component';
import { SignInContainer, ButtonContainer, SignUpParagraph, StyledSignUpLink, FormGroup } from './sign-in-form.styles';
import { useAuth } from '../../utils/api/auth/login';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

const schema = yup.object().shape({
	email: yup
		.string()
		.email('Invalid email format')
		.matches(/^[\w\-.]+@((stud\.)?noroff\.no)$/, 'You must use a Noroff email to log in.')
		.required('Email is required'),
	password: yup.string().required('Password is required'),
});

const SignInForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});
	const { login } = useAuth();
	const navigate = useNavigate();
	const { setCurrentUser, setToken } = useContext(UserContext);

	const onSubmit = async (data) => {
		try {
			const userData = await login(data.email, data.password);

			if (userData && userData.accessToken) {
				localStorage.setItem('token', userData.accessToken); // Store token
				setCurrentUser(userData); // Assuming userData contains a user object
				setToken(userData.accessToken); // Assuming userData contains a token
				navigate('/explore');
				reset();
			} else {
				console.error('Login response does not contain expected properties:', userData);
			}
		} catch (error) {
			alert('Login failed: ' + (error.message || 'An error occurred during login.'));
		}
	};

	return (
		<SignInContainer>
			<h2>Sign in to your account?</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormGroup>
					<label>Email</label>
					<input type='email' {...register('email')} required pattern='^[\w\-.]+@((stud\.)?noroff\.no)$' title='Only Noroff domains (noroff.no and stud.noroff.no) are allowed to log in.' />
					{errors.email && <span>{errors.email.message}</span>}
				</FormGroup>
				<FormGroup>
					<label>Password</label>
					<input type='password' {...register('password')} required autoComplete='current-password' />
					{errors.password && <span>{errors.password.message}</span>}
				</FormGroup>
				<SignUpParagraph>
					<span>Don't have an account? </span>
					<StyledSignUpLink to='/auth/signup'>Sign up</StyledSignUpLink>
				</SignUpParagraph>
				<ButtonContainer>
					<Button type='submit'>Sign In</Button>
				</ButtonContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
