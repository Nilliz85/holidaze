import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
	width: 50px;
	height: 50px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 15px 15px 15px;
	cursor: pointer;

	&:hover {
		transform: scale(1.2);
		transform-origin: center bottom;
	}

	&:active {
		transform: scale(1);
		opacity: 0.5;
	}
`;

export const ShoppingBagIconImg = styled(ShoppingBagIcon)`
	width: 40px;
	height: 40px;
`;

export const ItemCount = styled.span`
	position: absolute;
	font-size: 16px;
	font-weight: bold;
	bottom: 10px;
`;
