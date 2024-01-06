import styled from 'styled-components';

export const CategoryTitle = styled.h2`
	width: 80%;
	margin: auto;
	font-size: xxx-large;
	margin-bottom: 30px;
	text-align: center;
	border-bottom: 2px solid black;
`;

export const CategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 30px;
	row-gap: 100px;
	width: 80%;
	margin: auto;
	margin-bottom: 100px;
`;
