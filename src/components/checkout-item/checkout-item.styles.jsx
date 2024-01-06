import styled from 'styled-components';
import { QuantityButton, ClearItemButton } from '../button/button.styles';

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	max-height: 500px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: xx-large;
	align-items: center;
`;

export const FixedSizeImageContainer = styled.div`
	display: flex;
	width: 20%;
	height: 400px;
	overflow: hidden;
	justify-content: center;
	align-items: center;
`;

export const StyledImage = styled.img`
	width: 70%;
	height: 100%;
	object-fit: cover;
`;

export const CartItemName = styled.span`
	width: 20%;
	margin: auto;
`;

export const CartItemQuantity = styled.span`
	display: flex;
	width: 22%;
`;

export const DecrementButton = styled(QuantityButton)``;
export const IncrementButton = styled(QuantityButton)``;

export const Value = styled.span`
	margin: 0 20px;
	cursor: default;
`;

export const CartItemPrice = styled.span`
	width: 22%;
	cursor: default;
`;

export const ClearCartItemButton = styled(ClearItemButton)``;
