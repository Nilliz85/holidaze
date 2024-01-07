import styled from 'styled-components';

export const ProductsPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const ProductsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	width: 80%;
	margin: auto;
	gap: 30px;
	row-gap: 250px;
	padding: 16px;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
