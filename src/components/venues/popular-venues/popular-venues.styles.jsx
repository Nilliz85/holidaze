import styled from 'styled-components';

export const PopularVenuesSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 200px auto;
	padding: 20px;
	max-width: 2560px;
`;

export const SectionHeader = styled.h2`
	font-size: xx-large;
	color: #3e3e3e;
`;

export const PopularVenuesContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const PopularVenueCard = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: calc(25% - 40px);
	border: 1px solid #c7c7c7;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	transition: box-shadow 0.3s ease-in-out;

	&:hover {
		box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
	}
`;

export const PopularVenueImage = styled.img`
	width: 90%;
	height: 450px;
	margin: auto;
	margin-top: 5%;
	object-fit: cover;
	border-radius: 12px;
`;

export const PopularVenueContent = styled.div`
	width: 90%;
	margin: auto;
	padding: 10px;
`;

export const PopularVenueName = styled.h3`
	font-size: larger;
	font-weight: bold;
	margin: 0 0 15px 0;
	color: #3e3e3e;
`;

export const PriceRating = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2%;
`;

export const PopularVenuePrice = styled.p`
	font-size: large;
	font-weight: bold;
	color: #737373;
	margin-bottom: 10px;
`;

export const PopularVenueRating = styled.div`
	text-align: right;
	color: #737373;
`;

export const RatingText = styled.span`
	font-weight: bold;
	margin-right: 5px;
`;
