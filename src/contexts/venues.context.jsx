import { createContext, useState, useEffect } from 'react';
import { fetchVenues } from '../utils/api/venues/get-venues'; // Make sure to update the import path as needed

export const VenuesContext = createContext({
	venues: [],
	isLoading: false,
	error: null,
});

export const VenuesProvider = ({ children }) => {
	const [venues, setVenues] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getVenues = async () => {
			setIsLoading(true);
			try {
				const fetchedVenues = await fetchVenues();
				setVenues(fetchedVenues);
				console.log('Fetched Venues:', fetchedVenues);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};
		getVenues();
	}, []);

	const value = { venues, isLoading, error };
	return <VenuesContext.Provider value={value}>{children}</VenuesContext.Provider>;
};
