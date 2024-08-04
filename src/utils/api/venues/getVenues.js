import { API_BASE_URL, ENDPOINTS, HEADERS } from '../api-config';

export const fetchVenues = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}${ENDPOINTS.venues.base}`, {
      method: 'GET',
      headers: HEADERS,
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch venues:", error);
    throw error;
  }
};
