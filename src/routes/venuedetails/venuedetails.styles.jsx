import styled from 'styled-components';
import Button from '../../components/button/button.component';

export const VenueDetailPageContainer = styled.div`
	text-align: center;
	font-size: xx-large;
	margin-bottom: 300px;
`;

export const VenueDetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	width: 45%;
	height: 1400px;
	align-items: center;
	position: relative;
	box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
	margin-bottom: 100px;

	button {
		opacity: 0.85;
		display: flex;
	}
`;

export const VenueTitle = styled.h1`
	font-size: xxx-large;
	width: 50%;
	text-align: center;
`;

export const VenueImage = styled.img`
	width: 80%;
	height: 95%;
	object-fit: cover;
	margin-bottom: 30px;
	overflow: hidden;
`;

export const VenueDescription = styled.p`
	font-size: x-large;
`;

export const VenuePrice = styled.p`
	width: 25%;
`;

export const VenueCardFooter = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 400px;
	justify-content: space-between;
	text-align: center;
	align-items: center;
	font-size: xx-large;
	padding: 20px;
	margin-bottom: 30px;
`;

export const VenueRating = styled.div`
	font-size: 20px;
	text-align: center;
`;

export const PriceContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 80%;
	align-items: center;
	margin-top: 10px;
	margin-bottom: 10px;
`;

export const PriceLabel = styled.span``;

// export const AddBookingButton = styled(Button)`
// 	width: 20%;
// 	height: 100px;
// 	opacity: 0.8;
// 	position: absolute;
// 	top: calc(74% - 25px);
// 	z-index: 3;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;

// 	&:hover {
// 		opacity: 0.85;
// 		cursor: pointer;
// 	}
// `;
