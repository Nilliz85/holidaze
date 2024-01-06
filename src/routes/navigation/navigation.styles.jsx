import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as RoyalLogo } from '../../assets/royal-rags-logo.svg';

export const NavigationContainer = styled.div`
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 80px;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 15px;
`;

export const RoyalLogoImg = styled(RoyalLogo)`
	margin-top: 10px;
	height: 70px;
	width: 400%;

	&:hover {
		transform: scale(1.15);
		transform-origin: center bottom;
	}

	&:active {
		transform: scale(1);
		opacity: 0.5;
	}
`;

export const NavLinks = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const NavLink = styled(Link)`
	margin: 10px 15px;
	font-size: xx-large;
	cursor: pointer;
	border-bottom: 2px solid transparent;

	&:hover {
		transform: scale(1.2);
		transform-origin: center bottom;
		border-bottom: 2px solid black;
		margin-bottom: 25px;
	}

	&:active {
		transform: scale(1);
		color: darkgray;
		border-bottom: 1px solid darkgray;
	}
`;
