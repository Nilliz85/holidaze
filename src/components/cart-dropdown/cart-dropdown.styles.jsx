import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 480px;
	height: 680px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 2px solid black;
	background-color: white;
	top: 110px;
	right: 40px;
	z-index: 5;

	button {
		margin-top: auto;
	}
`;

export const EmptyCartMessage = styled.span`
	font-size: xx-large;
	margin: 50px auto;
`;

export const CartDropdownItems = styled.div`
	height: 480px;
	display: flex;
	flex-direction: column;
	overflow: auto;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #888;
	}

	&::-webkit-scrollbar-thumb:hover {
		background-color: #555;
	}
`;

export const CartDropdownTotal = styled.span`
	margin-top: 30px;
	margin-left: auto;
	padding-right: 10px;
	font-size: xx-large;
`;
