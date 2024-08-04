import { API_BASE_URL, HEADERS, ENDPOINTS } from '../api-config';

export const fetchProfileByName = async (username) => {
	try {
		const response = await fetch(`${API_BASE_URL}${ENDPOINTS.profiles.byName(username)}`, {
			method: 'GET',
			headers: HEADERS(),
		});

		if (!response.ok) {
			throw new Error('Failed to fetch profile');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
};
