import styled from 'styled-components';

export const PopularVenuesSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 100px auto;
	max-width: 2560px;

	@media (max-width: 2000px) {
		margin: 50px auto;
	}

	@media (max-width: 1300px) {
		margin: 30px auto;
	}

	@media (max-width: 992px) {
		margin: 30px auto;
	}

	@media (max-width: 768px) {
		margin: 20px auto;
	}

	@media (max-width: 576px) {
		margin: 20px auto;
	}

	@media (max-width: 480px) {
		margin: 10px auto;
	}
`;

export const SectionHeader = styled.h2`
	text-align: center;
	font-size: xxx-large;
	color: #3e3e3e;

	@media (max-width: 820px) {
		font-size: x-large;
	}
`;
