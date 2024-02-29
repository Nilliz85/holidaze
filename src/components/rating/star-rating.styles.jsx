import styled from 'styled-components';

const BaseStar = styled.span`
  font-size: large;
  margin-left: 2px;
  display: inline-block;
  position: relative;
  top: 0.05em;
`;


export const FilledStar = styled(BaseStar)`
  color: #f5a623; 
`;


export const EmptyStar = styled(BaseStar)`
  color: #ccc; 
`;
