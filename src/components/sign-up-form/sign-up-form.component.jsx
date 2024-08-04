import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../button/button.component';
import { SignUpContainer, SignInParagraph, StyledSignInLink, ButtonContainer, FormGroup } from './sign-up-form.styles';

const schema = yup.object().shape({
	name: yup.string().required('Name is required'),
	email: yup
		.string()
		.email('Invalid email format')
		.matches(/^[\w\-.]+@((stud\.)?noroff\.no)$/, 'You must use a Noroff email to sign up.')
		.required('Email is required'),
	password: yup.string().required('Password is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		.required('Confirm Password is required'),
});

const SignUpForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});
	const navigate = useNavigate();

	const onSubmit = async (data) => {
		try {
			const response = await register(data.name, data.email, data.password);
			reset();
			navigate('/explore');
		} catch (error) {
			alert(`Registration failed: ${error.message}`);
		}
	};

	return (
		<SignUpContainer>
			<h2>Create an account</h2>
			<span>Enter your name, email, and password</span>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormGroup>
					<label>Name</label>
					<input type='text' {...register('name')} required />
					{errors.name && <span>{errors.name.message}</span>}
				</FormGroup>
				<FormGroup>
					<label>Email</label>
					<input type='email' {...register('email')} required pattern='^[\w.-]+@(stud\.)?noroff\.no$' title='Only Noroff email addresses are allowed.' />
					{errors.email && <span>{errors.email.message}</span>}
				</FormGroup>
				<FormGroup>
					<label>Password</label>
					<input type='password' {...register('password')} required />
					{errors.password && <span>{errors.password.message}</span>}
				</FormGroup>
				<FormGroup>
					<label>Confirm Password</label>
					<input type='password' {...register('confirmPassword')} required />
					{errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
				</FormGroup>
				<SignInParagraph>
					<span>Already have an account? </span>
					<StyledSignInLink to='/auth/signin'>Sign In</StyledSignInLink>
				</SignInParagraph>
				<ButtonContainer>
					<Button type='submit'>Sign Up</Button>
				</ButtonContainer>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;
