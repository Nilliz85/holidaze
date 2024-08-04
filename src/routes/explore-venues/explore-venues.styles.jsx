import styled from 'styled-components';
import { ReactComponent as FilterIcon } from '../../assets/filter-icon.svg';

export const ExploreContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: auto;
	padding: 20px;
	max-width: 2560px;
`;


export const SectionHeader = styled.h2`
text-align: center;
font-size: xxx-large;
color: #3e3e3e;
`;

export const SearchAndFilter = styled.div`
display: flex;
align-items: center;
justify-content: flex-start; 
margin: 0 auto 80px;
padding: 20px;
gap: 10px;
text-align: center;
width:50%;
`;


export const StyledFilterIcon = styled(FilterIcon)`
	width: 30px;
	height: 30px;
	cursor: pointer;
  margin: 0 auto 60px;
  padding-left: 10px;
`;


export const LoadMoreButton = styled.button`
	padding: 20px 30px;
	width: 10%;
	border: none;
	border-radius: 4px;
	background-color: #f5a623;
	color: white;
	cursor: pointer;
	margin: 100px auto 200px;

	&:hover {
		background-color: darken(#e57000, 30%);
	}
`;
