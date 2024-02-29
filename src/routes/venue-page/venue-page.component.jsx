import React, { useContext, useState } from 'react';
import { VenuesContext } from '../../contexts/venues.context';
import VenueCard from '../../components/venue-card/venue-card.component';
import SearchBox from '../../components/search-box/search-box.component';
import { VenuesPageContainer, VenuesContainer } from './venue-page.styles';

const VenuePage = () => {
	const { venues, isLoading, error } = useContext(VenuesContext);
	const [searchField, setSearchField] = useState('');

	const onSearchChange = (event) => {
		const searchValue = event.target.value.toLowerCase();
		setSearchField(searchValue);
	};

	const filteredVenues = searchField
		? venues.filter((venue) => {
				return venue.name.toLowerCase().includes(searchField) || venue.location.city.toLowerCase().includes(searchField) || venue.location.country.toLowerCase().includes(searchField);
		  })
		: venues;

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<VenuesPageContainer>
			<SearchBox placeholder='Search venues' onChangeHandler={onSearchChange} />
			<VenuesContainer>
				{filteredVenues.map((venue) => (
					<VenueCard key={venue.id} venue={venue} />
				))}
			</VenuesContainer>
		</VenuesPageContainer>
	);
};

export default VenuePage;
