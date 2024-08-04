import styled from 'styled-components';

export const HeroSectionContainer = styled.div`
	position: relative;
	background-color: #fff;
	text-align: center;

	@media (max-width: 2000px) {
		padding: 10px 0;
	}

	@media (max-width: 1300px) {
		padding: 10px 0;
	}
	@media (max-width: 992px) {
		padding: 10px 0;
	}

	@media (max-width: 768px) {
		padding: 10px 0;
	}

	@media (max-width: 576px) {
		padding: 10px 0;
	}

	@media (max-width: 480px) {
		padding: 10px 0;
	}
`;

export const HeroImage = styled.img`
	width: 100%;
	max-height: 1560px;
	overflow: hidden;
	object-fit: cover;
	object-position: center;

	@media (max-width: 2000px) {
		max-height: 725px;
	}

	@media (max-width: 1300px) {
		max-height: 453px;
	}

	@media (max-width: 992px) {
		max-height: 385px;
	}

	@media (max-width: 768px) {
		max-height: 272px;
	}

	@media (max-width: 576px) {
		max-height: 227px;
	}

	@media (max-width: 480px) {
		max-height: 400px;
	}
`;

export const HeroTitle = styled.h1`
	margin-bottom: 20px;

	@media (max-width: 2000px) {
		font-size: 2, 5rem;
	}

	@media (max-width: 1300px) {
		font-size: 2rem;
	}

	@media (max-width: 992px) {
		font-size: 2rem;
	}

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}

	@media (max-width: 576px) {
		font-size: 1.25rem;
	}

	@media (max-width: 480px) {
		font-size: 1.25rem;
	}
`;

export const HeroText = styled.p`
	margin-bottom: 20px;

	@media (max-width: 2000px) {
		font-size: 1.2rem;
	}

	@media (max-width: 1300px) {
		font-size: 1rem;
	}

	@media (max-width: 992px) {
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		font-size: 0.875rem;
	}

	@media (max-width: 576px) {
		font-size: 0.75rem;
	}

	@media (max-width: 480px) {
		font-size: 0.55rem;
	}
`;
