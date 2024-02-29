import styled from 'styled-components';

export const DirectoryContainer = styled.div`
	width: 100%;
	margin: auto;
	display: grid;
	grid-template-columns: repeat(${(props) => props.numColumns || 4}, 1fr);
	gap: 20px;

	@media (max-width: 1800px) {
		grid-template-columns: repeat(${(props) => props.numColumns || 4}, 1fr);
	}
	@media (max-width: 1200px) {
		grid-template-columns: repeat(${(props) => Math.min(props.numColumns || 4, 3)}, 1fr);
	}
	@media (max-width: 768px) {
		grid-template-columns: repeat(${(props) => Math.min(props.numColumns || 4, 2)}, 1fr);
	}
	@media (max-width: 480px) {
		grid-template-columns: repeat(${(props) => Math.min(props.numColumns || 4, 1)}, 1fr);
	}
`;
