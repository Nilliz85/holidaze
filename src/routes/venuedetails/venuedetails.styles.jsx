import styled from 'styled-components';

export const VenueDetailPageContainer = styled.div`
	text-align: center;
	font-size: x-large;
	margin-bottom: 300px;

	@media (max-width: 2000px) {
		font-size: x-large;
	}

	@media (max-width: 1300px) {
		font-size: x-large;
	}

	@media (max-width: 992px) {
		font-size: large;
	}

	@media (max-width: 768px) {
		font-size: large;
	}

	@media (max-width: 576px) {
		font-size: medium;
	}

	@media (max-width: 480px) {
		font-size: medium;
	}
`;

export const VenueDetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	width: 1160px;
	height: 1200px;
	align-items: center;
	position: relative;
	box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
	margin-bottom: 100px;

	button {
		opacity: 0.85;
		display: flex;
	}
	@media (max-width: 2000px) {
		width: 864px;
		height: 880px;
	}

	@media (max-width: 1300px) {
		width: 560px;
		height: 570px;
	}

	@media (max-width: 992px) {
		width: 429px;
		height: 437px;
	}

	@media (max-width: 768px) {
		width: 332px;
		height: 338px;
	}

	// @media (max-width: 576px) {
	// 	width: 249px;
	// 	height: 254px;
	// }

	// @media (max-width: 480px) {
	// 	width: 208px;
	// 	height: 212px;
	// }
`;

export const VenueTitle = styled.h1`
	font-size: x-large;
	width: 50%;
	text-align: center;

	@media (max-width: 2000px) {
		font-size: x-large;
	}

	@media (max-width: 1300px) {
		font-size: large;
	}

	@media (max-width: 992px) {
		font-size: large;
	}

	@media (max-width: 768px) {
		font-size: medium;
	}

	@media (max-width: 576px) {
		font-size: medium;
	}

	@media (max-width: 480px) {
		font-size: medium;
	}
`;

export const VenueImage = styled.img`
	width: 900px;
	height: 920px;
	object-fit: cover;
	overflow: hidden;

	@media (max-width: 2000px) {
		width: 700px;
		height: 720px;
	}

	@media (max-width: 1300px) {
		width: 455px;
		height: 468px;
	}

	@media (max-width: 992px) {
		width: 424px;
		height: 434px;
	}

	@media (max-width: 768px) {
		width: 328px;
		height: 336px;
	}
`;

export const VenueDescription = styled.p`
	font-size: x-large;
`;

export const VenuePrice = styled.p`
	font-size: 20px;

	@media (max-width: 2000px) {
		font-size: 20px;
	}

	@media (max-width: 1300px) {
		font-size: 20px;
	}

	@media (max-width: 992px) {
		font-size: 20px;
	}

	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

export const VenueCardFooter = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 200px;
	justify-content: space-between;
	text-align: center;
	align-items: center;
	font-size: xx-large;
`;

export const VenueRating = styled.div`
	font-size: 20px;
	text-align: center;

	@media (max-width: 2000px) {
		font-size: 20px;
	}

	@media (max-width: 1300px) {
		font-size: 20px;
	}

	@media (max-width: 992px) {
		font-size: 20px;
	}

	@media (max-width: 768px) {
		font-size: 16px;
	}

	// @media (max-width: 576px) {
	// 	font-size: 20px;
	// }

	// @media (max-width: 480px) {
	// 	font-size: 20px;
	// }
`;

export const PriceContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 80%;
	align-items: center;
	margin-top: 10px;
	margin-bottom: 10px;
`;

export const PriceLabel = styled.span`
	font-size: 20px;
	text-align: center;

	@media (max-width: 2000px) {
		font-size: 20px;
	}

	@media (max-width: 1300px) {
		font-size: 20px;
	}

	@media (max-width: 992px) {
		font-size: 20px;
	}

	@media (max-width: 768px) {
		font-size: 16px;
	}

	// @media (max-width: 576px) {
	// 	font-size: 20px;
	// }

	// @media (max-width: 480px) {
	// 	font-size: 20px;
	// }
`;

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
