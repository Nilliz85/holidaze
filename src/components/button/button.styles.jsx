import styled from 'styled-components';

export const BaseButton = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: x-large;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-family: 'Open Sans', sans-serif;
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: white;
		color: black;
		border: 2px solid black;
	}

	&:active {
		transform: scale(0.93);
		opacity: 75%;
	}
`;

export const GoogleSignInButton = styled(BaseButton)`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #4285f4;
		border: none;
	}
	&:active {
		border: none;
		color: darkgrey;
	}
`;

export const InvertedButton = styled(BaseButton)`
	background-color: white;
	color: black;
	border: 2px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}

	&:active {
		background-color: #4f4f4f;
		border: 2px solid grey;
	}
`;

export const QuantityButton = styled.div`
	cursor: pointer;
	padding: 0px 5px;
	margin: 0px 5px 0px 0px;

	&:hover {
		transform: scale(1.3);
	}
	&:active {
		transform: scale(1);
		color: grey;
	}
`;

export const ClearItemButton = styled.div`
	cursor: pointer;
	margin: auto;
	font-size: xx-large;
	transition: transform 0.1s ease;

	&:hover {
		transform: scale(1.2);
	}

	&:active {
		transform: scale(1);
		color: grey;
	}
`;
