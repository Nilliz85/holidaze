import styled from 'styled-components';
import { QuantityButton, ClearItemButton } from '../button/button.styles';

export const CartItemContainer = styled.div`
	width: 95%;
	display: flex;
	height: 160px;
	margin-bottom: 30px;
	align-items: center;
	border-bottom: 1px solid darkgrey;
	padding-bottom: 5px;
`;

export const StyledCartImage = styled.img`
	width: 30%;
	height: 90%;
`;

export const ItemDetails = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10px 40px;
`;
export const CartItemName = styled.span`
	font-size: x-large;
`;
export const CartItemPrice = styled.span`
	display: flex;
	font-size: x-large;
`;

export const DecrementItemButton = styled(QuantityButton)``;
export const IncrementItemButton = styled(QuantityButton)`
	margin: 0px 20px 0px 5px;
`;

export const CartValue = styled.span`
	cursor: default;
`;

export const CartPriceValue = styled.span`
	cursor: default;
`;

export const ClearCartItemButton = styled(ClearItemButton)``;
