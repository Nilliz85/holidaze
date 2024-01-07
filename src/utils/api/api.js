export const API_URL = 'https://api.noroff.dev/api/v1/online-shop';

export const fetchProducts = async () => {
	const response = await fetch(API_URL);
	if (!response.ok) {
		throw new Error('Failed to fetch products.');
	}
	return await response.json();
};
