import styled from 'styled-components';


export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 500px;
  z-index: 11;
`;

export const ModalSection = styled.div`
  margin-bottom: 20px;
`;

export const ModalHeader = styled.h3`
  margin-bottom: 10px;
`;


export const ModalInput = styled.input`
  margin-right: 10px;
  padding: 8px;
  font-size: 1rem;
  border-radius: 8px;
  border: 3px solid #ccc;
`;


export const ModalSelect = styled.select`
  margin-bottom: 10px;
  padding: 8px;
  border: 3px solid #ccc;
  border-radius: 8px;
  width: 50%;
  box-sizing: border-box;
`;


export const StyledSelect = styled.select`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: calc(100% - 20px);
`;


export const AmenitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px; 
`;


export const FilterByRatingContainer = styled.div`
display: flex;
margin-bottom: 10px; 
`;


export const SectionHeader = styled.h3`
  margin-bottom: 10px;
`;

export const PriceInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PriceInputLabel = styled.label`
  &:first-of-type {
    margin-right: 5px;
  }

  &:last-of-type {
    margin-left: 5px;
  }
`;

export const MinMaxLabel = styled.span`
  margin: 0 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #f5a623;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: darken(#e57000, 30%);
  }
`;