import styled from 'styled-components';

export const HamburgerIconContainer = styled.div`
	width: 30px;
	height: 25px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;
	margin-right: 20px;

	@media (min-width: 801px) {
		display: none;
	}
`;

export const HamburgerLine = styled.div`
	width: 100%;
	height: 4px;
	background-color: black;
`;
