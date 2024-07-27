import React, { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
import HeroSection from '../../components/hero-section/hero-section.component';
import PopularVenuesComponent from '../../components/popular-venues/popular-venues.component';
import InformationSection from '../../components/information-section/information-section.component';
import { fetchVenues } from '../../utils/api/venues/get-venues';
import { HomeBody } from './home.styles';

const Home = () => {
	const [venues, setVenues] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchAndSetVenues = async () => {
			setIsLoading(true);
			try {
				const data = await fetchVenues();
				const fiveStarVenues = data.filter((venue) => venue.rating === 5);
				const fourStarVenues = data.filter((venue) => venue.rating === 4);

				// Use a Set to track unique venue names
				const uniqueNames = new Set();

				// Function to filter unique venues based on name
				const addUniqueVenues = (venues) => {
					return venues.filter((venue) => {
						const isNameUnique = !uniqueNames.has(venue.name);
						if (isNameUnique) {
							uniqueNames.add(venue.name);
							return true;
						}
						return false;
					});
				};

				// Shuffle and take the first few unique 5-star and then 4-star venues if needed
				let selectedVenues = addUniqueVenues(fiveStarVenues.sort(() => 0.5 - Math.random()));
				if (selectedVenues.length < 4) {
					let additionalVenues = addUniqueVenues(fourStarVenues.sort(() => 0.5 - Math.random()));
					selectedVenues = [...selectedVenues, ...additionalVenues].slice(0, 4);
				}

				setVenues(selectedVenues);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchAndSetVenues();
	}, []);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<HomeBody>
			<HeroSection />
			<PopularVenuesComponent />
			<InformationSection />
		</HomeBody>
	);
};

export default Home;
