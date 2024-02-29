import React from 'react';
import StarRating from '../rating/star-rating.component';
import CustomCheckbox from '../checkbox/checkbox.component';

import {
	ModalOverlay,
	ModalContent,
	ModalSection,
	ModalHeader,
	ModalInput,
	ModalSelect,
	ButtonContainer,
	Button,
	SectionHeader,
	PriceInputContainer,
	PriceInputLabel,
	MinMaxLabel,
	AmenitiesContainer,
	StyledInput,
	StyledSelect,
	FilterByRatingContainer,
} from './filter-modal.styling';

const FiltersModal = ({
	isOpen,
	onClose,
	sortCriteria,
	setSortCriteria,
	amenities,
	setAmenities,
	selectedRatings,
	setSelectedRatings,
	minPrice,
	setMinPrice,
	maxPrice,
	setMaxPrice,
	minMaxGuests,
	setMinMaxGuests,
}) => {
	if (!isOpen) return null;

	const handleAmenitiesChange = (amenity, value) => {
		setAmenities((prevAmenities) => ({
			...prevAmenities,
			[amenity]: value,
		}));
	};

	const handleRatingChange = (rating) => {
		setSelectedRatings((prevRatings) => (prevRatings.includes(rating) ? prevRatings.filter((r) => r !== rating) : [...prevRatings, rating]));
	};

	const clearFilters = () => {
		setSelectedRatings([]);
		setMinPrice(null);
		setMaxPrice(null);
		setMinMaxGuests(null);
		setAmenities({
			wifi: false,
			parking: false,
			breakfast: false,
			pets: false,
		});
	};

	return (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<ModalSection>
					<ModalHeader>Sort by:</ModalHeader>
					<ModalSelect value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
						<option value='price'>Price (Low to High)</option>
						<option value='priceDesc'>Price (High to Low)</option>
						<option value='rating'>Rating (High to Low)</option>
						<option value='ratingAsc'>Rating (Low to High)</option>
						<option value='maxGuests'>Max Guests (High to Low)</option>
						<option value='maxGuestsAsc'>Max Guests (Low to High)</option>
					</ModalSelect>
				</ModalSection>

				<ModalSection>
					<SectionHeader>Filter by amenities:</SectionHeader>
					<AmenitiesContainer>
						{Object.keys(amenities).map((amenity) => (
							<CustomCheckbox
								key={amenity}
								label={amenity.charAt(0).toUpperCase() + amenity.slice(1)}
								checked={amenities[amenity]}
								onChange={(e) => handleAmenitiesChange(amenity, e.target.checked)}
							/>
						))}
					</AmenitiesContainer>
				</ModalSection>

				<ModalSection>
					<SectionHeader>Filter by rating:</SectionHeader>
					{[1, 2, 3, 4, 5].map((rating) => (
						<FilterByRatingContainer key={rating}>
							<CustomCheckbox key={rating} checked={selectedRatings.includes(rating)} onChange={() => handleRatingChange(rating)} />
							<StarRating rating={rating} />
						</FilterByRatingContainer>
					))}
				</ModalSection>

				<ModalSection>
					<SectionHeader>Filter by price:</SectionHeader>
					<PriceInputContainer>
						<PriceInputLabel>
							<ModalInput type='number' placeholder='Min' value={minPrice || ''} onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : null)} />
						</PriceInputLabel>
						<MinMaxLabel>-</MinMaxLabel>
						<PriceInputLabel>
							<ModalInput type='number' placeholder='Max' value={maxPrice || ''} onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : null)} />
						</PriceInputLabel>
					</PriceInputContainer>
				</ModalSection>

				<ModalSection>
					<SectionHeader>Filter by guests:</SectionHeader>
					<StyledSelect value={minMaxGuests} onChange={(e) => setMinMaxGuests(e.target.value)} placeholder='1 guest'>
						<option value='1'>1 guest</option>
						<option value='2'>2 guests</option>
						<option value='3'>3 guests</option>
						<option value='4'>4 guests</option>
						<option value='5'>5 guests</option>
						<option value='6'>6 guests</option>
						<option value='7'>7 guests</option>
						<option value='8'>8 guests</option>
						<option value='9'>9 guests</option>
						<option value='10'>10+ guests</option>
					</StyledSelect>
				</ModalSection>

				<ButtonContainer>
					<Button
						onClick={() => {
							onClose();
						}}
					>
						Ok
					</Button>
					<Button
						onClick={() => {
							clearFilters();
							onClose();
						}}
					>
						Clear Filters
					</Button>
				</ButtonContainer>
			</ModalContent>
		</ModalOverlay>
	);
};

export default FiltersModal;
