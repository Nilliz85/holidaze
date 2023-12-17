import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
	useEffect(async () => {
		const response = await getRedirectResult(auth);
		console.log(response);
	}, []);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentAuth(user);
	};

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
			<button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
		</div>
	);
};

export default SignIn;
