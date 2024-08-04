import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { AuthenticationContainer } from './authentication.styles';

const AuthenticationSignIn = () => {
	return (
		<AuthenticationContainer>
			<SignInForm />
		</AuthenticationContainer>
	);
};

export default AuthenticationSignIn;
