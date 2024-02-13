import { API_BASE_URL, ENDPOINTS } from '../api-config';

export const fetchAuth = async () => {
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.auth}`);
};