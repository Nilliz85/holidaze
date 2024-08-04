import styled from 'styled-components';

export const SearchBar = styled.input`
	flex-grow: 1;
	display: block;
	font-size: 1.3rem;
	-webkit-appearance: none;
	border: 3px solid #c7c7c7;
	outline: none;
	padding: 10px;
	width: 350px;
	border-radius: 10px;
	line-height: 30px;
	margin: 30px auto 100px;

	&::placeholder {
		padding: 10px;
		color: #000;
		font-style: italic;
	}
`;
