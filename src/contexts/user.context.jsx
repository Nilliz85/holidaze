import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => {},
	token: null,
	setToken: () => {},
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || null);
	const [token, setToken] = useState(localStorage.getItem('token') || null);
	const navigate = useNavigate();

	const INACTIVITY_TIME_LIMIT = 5 * 60 * 1000; // 5 minutes
	let inactivityTimer;

	useEffect(() => {
		localStorage.setItem('currentUser', JSON.stringify(currentUser));
		localStorage.setItem('token', token);
	}, [currentUser, token]);

	const resetInactivityTimer = () => {
		clearTimeout(inactivityTimer);
		if (currentUser && token) {
			inactivityTimer = setTimeout(logoutDueToInactivity, INACTIVITY_TIME_LIMIT);
		}
	};

	const logoutDueToInactivity = () => {
		alert('You have been logged out due to inactivity.');
		setCurrentUser(null);
		setToken(null);
		localStorage.removeItem('currentUser');
		localStorage.removeItem('token');
		navigate('/auth/signin');
	};

	useEffect(() => {
		const events = ['mousemove', 'keydown', 'click', 'scroll'];
		events.forEach((event) => window.addEventListener(event, resetInactivityTimer));

		resetInactivityTimer(); // Initialize timer when component mounts

		return () => {
			events.forEach((event) => window.removeEventListener(event, resetInactivityTimer));
			clearTimeout(inactivityTimer);
		};
	}, [currentUser, token]);

	const value = {
		currentUser,
		setCurrentUser,
		token,
		setToken,
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
