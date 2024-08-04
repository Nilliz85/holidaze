import styled from 'styled-components';

const BaseStar = styled.span`
	font-size: x-large;
	display: inline-block;
	position: relative;
	top: 0.05em;

	@media (max-width: 768) {
		font-size: medium;
	}
`;

export const FilledStar = styled(BaseStar)`
	color: #f5a623;
`;

export const EmptyStar = styled(BaseStar)`
	color: #ccc;
`;
