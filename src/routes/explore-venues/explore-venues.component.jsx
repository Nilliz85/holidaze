import React, { useContext, useState, useEffect, useRef } from 'react';
import { VenuesContext } from '../../contexts/venues.context';
import Directory from '../../components/directory/directory.component';
import SearchBox from '../../components/search-box/search-box.component';
import FiltersModal from '../../components/filter-modal/filter-modal.component';
import { ExploreContainer, StyledFilterIcon, SectionHeader, SearchAndFilter, LoadMoreButton } from './explore-venues.styles';

const ExploreVenues = () => {
	const { venues, isLoading, error } = useContext(VenuesContext);
	const [searchField, setSearchField] = useState('');
	const [selectedRatings, setSelectedRatings] = useState([]);
	const [minPrice, setMinPrice] = useState(null);
	const [maxPrice, setMaxPrice] = useState(null);
	const [minMaxGuests, setMinMaxGuests] = useState(null);
	const [sortCriteria, setSortCriteria] = useState('price');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [visibleVenuesCount, setVisibleVenuesCount] = useState(15);
	const [amenities, setAmenities] = useState({
		wifi: false,
		parking: false,
		breakfast: false,
		pets: false,
	});

	const loadMoreVenues = () => {
		setVisibleVenuesCount((prevCount) => prevCount + 15);
	};

	const toggleModal = () => setIsModalOpen(!isModalOpen);

	const onSearchChange = (event) => {
		const searchValue = event.target.value.toLowerCase();
		setSearchField(searchValue);
	};

	const filteredVenues = venues.filter((venue) => {
		const searchMatch = venue.name.toLowerCase().includes(searchField) || venue.location.city.toLowerCase().includes(searchField) || venue.location.country.toLowerCase().includes(searchField);
		const amenitiesMatch = Object.keys(amenities).every((amenity) => !amenities[amenity] || venue.meta[amenity]);
		const priceMatch = (minPrice != null ? venue.price >= minPrice : true) && (maxPrice != null ? venue.price <= maxPrice : true);
		const ratingMatch = selectedRatings.length > 0 ? selectedRatings.includes(venue.rating) : true;
		const maxGuestsMatch = minMaxGuests != null ? venue.maxGuests >= minMaxGuests : true;

		return searchMatch && amenitiesMatch && priceMatch && ratingMatch && maxGuestsMatch;
	});
	const sortedVenues = [...filteredVenues].sort((a, b) => {
		switch (sortCriteria) {
			case 'price':
				return a.price - b.price;
			case 'priceDesc':
				return b.price - a.price;
			case 'rating':
				return b.rating - a.rating;
			case 'ratingAsc':
				return a.rating - b.rating;
			case 'maxGuests':
				return b.maxGuests - a.maxGuests;
			case 'maxGuestsAsc':
				return a.maxGuests - b.maxGuests;
			default:
				return 0;
		}
	});

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<ExploreContainer>
			<SectionHeader>Explore Venues</SectionHeader>
			<SearchAndFilter>
				<SearchBox placeholder='Search by name or location...' onChangeHandler={onSearchChange} />
				<StyledFilterIcon onClick={toggleModal} />
			</SearchAndFilter>

			<Directory venues={sortedVenues.slice(0, visibleVenuesCount)} columns={5} />

			{visibleVenuesCount < sortedVenues.length && <LoadMoreButton onClick={loadMoreVenues}>Load More</LoadMoreButton>}

			<FiltersModal
				isOpen={isModalOpen}
				onClose={toggleModal}
				sortCriteria={sortCriteria}
				setSortCriteria={setSortCriteria}
				amenities={amenities}
				setAmenities={setAmenities}
				selectedRatings={selectedRatings}
				setSelectedRatings={setSelectedRatings}
				minPrice={minPrice}
				setMinPrice={setMinPrice}
				maxPrice={maxPrice}
				setMaxPrice={setMaxPrice}
				minMaxGuests={minMaxGuests}
				setMinMaxGuests={setMinMaxGuests}
			/>
		</ExploreContainer>
	);
};

export default ExploreVenues;
