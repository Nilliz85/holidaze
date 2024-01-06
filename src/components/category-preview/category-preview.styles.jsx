import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryPreviewTitle = styled.h2`
	font-size: xxx-large;
	margin-left: 10%;
	margin-bottom: 25px;
	width: fit-content;
	cursor: pointer;
	border-bottom: 2px solid transparent;

	&:hover {
		transform: scale(1.2);
		border-bottom: 2px solid black;
	}

	&:active {
		transform: scale(1);
	}
`;

export const CategoryPreviewLink = styled(Link)`
	&:active {
		color: darkgray;
		border-bottom: 2px solid darkgray;
	}
`;

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin: auto;
	margin-bottom: 100px;
`;

export const Preview = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 30px;
`;
