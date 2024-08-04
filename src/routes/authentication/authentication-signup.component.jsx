import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import { AuthenticationContainer } from './authentication.styles';

const AuthenticationSignUp = () => {
	return (
		<AuthenticationContainer>
			<SignUpForm />
		</AuthenticationContainer>
	);
};

export default AuthenticationSignUp;
