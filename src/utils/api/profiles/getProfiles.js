import { API_BASE_URL, ENDPOINTS } from '../api-config';

export const fetchProfileByName = async (name) => {
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.profiles.byName(name)}`);
};
