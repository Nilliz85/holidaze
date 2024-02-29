import { useContext } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { API_BASE_URL, HEADERS, ENDPOINTS } from '../api-config';

export const useAuth = () => {
	const { setCurrentUser } = useContext(UserContext);
	const { setToken } = useContext(UserContext);

	const login = async (email, password) => {
		const response = await fetch(`${API_BASE_URL}${ENDPOINTS.auth.login}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.message || 'Failed to login');
		}

		setToken(data.accessToken);
		localStorage.setItem('token', data.accessToken);
		setCurrentUser({
			name: data.name,
			email: data.email,
			avatar: data.avatar,
			venueManager: data.venueManager,
		});

		return data;
	};

	return {
		login,
	};
};
