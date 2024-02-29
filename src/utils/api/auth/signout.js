import { useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
	const { setCurrentUser } = useContext(UserContext);
	const navigate = useNavigate();

	const getToken = () => localStorage.getItem('token');

	const isLoggedIn = () => !!getToken();
	const signOut = () => {
		localStorage.removeItem('token');
		setCurrentUser(null);
		navigate('/');
	};

	return { isLoggedIn, signOut };
};
