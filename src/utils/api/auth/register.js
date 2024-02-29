import { API_BASE_URL, ENDPOINTS } from '../api-config';

export const register = async (name, email, password) => {
	const response = await fetch(`${API_BASE_URL}${ENDPOINTS.auth.register}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name, email, password }),
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || 'Failed to register');
	}

	return response.json();
};
