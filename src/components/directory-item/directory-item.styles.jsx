import styled from 'styled-components';

export const ImgNavButton = styled.button`
position: absolute;
top: 40%; 
z-index: 10; 
background: rgba(255, 255, 255, 0.7); 
border: none;
border-radius: 50%;
width: 40px;
height: 40px;
display: none;


&:hover {
	transform: scale(1.3);
	transform-origin: center;
}
`;

export const PreviousImgButton = styled(ImgNavButton)`
left: 10%;
`;


export const NextImgButton = styled(ImgNavButton)`
right: 10%;
`;


export const VenueCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	flex-basis: calc(25% - 40px);
	border: 1px solid #c7c7c7;
	border-radius: 12px;
	overflow: hidden;
	max-width: 500px;
	aspect-ratio: 4 / 5;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	transition: box-shadow 0.3s ease-in-out;

	&:hover {
		box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
	}

	&:hover ${ImgNavButton} {
    display: block;
  }
`;





export const VenueImage = styled.img`
	width: 90%;
	margin: auto;
	margin-top: 5%;
	object-fit: cover;
	overflow: hidden;
	border-radius: 12px;
	aspect-ratio: 5 / 5;
`;

export const VenueContent = styled.div`
	width: 90%;
	margin: auto;
	padding: 10px;
`;

export const VenueName = styled.h3`
	font-size: larger;
	font-weight: bold;
	margin: 0px 0px 15px 0px;
	color: #3e3e3e;
`;

export const PriceRating = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
  margin: 5% 0 2%;
`;

export const VenuePrice = styled.p`
	font-size: large;
	font-weight: bold;
	color: #737373;
`;

export const VenueRating = styled.div`
	display: flex;
	align-items: center;
	color: #737373;
`;

export const RatingText = styled.span`
	font-weight: bold;
	margin-right: 5px;
`;
