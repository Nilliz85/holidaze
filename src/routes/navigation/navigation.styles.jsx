// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { ReactComponent as HolidazeLogo } from '../../assets/holidaze-logo.svg';

// export const NavigationContainer = styled.div`
// 	height: 120px;
// 	width: 100%;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	padding: 0 80px;

// 	@media (max-width: 2000px) {
// 		padding: 0 60px;
// 	}

// 	@media (max-width: 1300px) {
// 		padding: 0 40px;
// 	}

// 	@media (max-width: 992px) {
// 		padding: 0 30px;
// 	}

// 	@media (max-width: 768px) {
// 		padding: 0 20px;
// 	}

// 	@media (max-width: 576px) {
// 		padding: 0 10px;
// 	}

// 	@media (max-width: 480px) {
// 		padding: 0 5px;
// 	}
// `;

// export const LogoContainer = styled(Link)`
// 	padding: 15px;

// 	@media (max-width: 2000px) {
// 		padding: 12px;
// 	}

// 	@media (max-width: 1300px) {
// 		padding: 10px;
// 	}

// 	@media (max-width: 992px) {
// 		padding: 8px;
// 	}

// 	@media (max-width: 768px) {
// 		padding: 6px;
// 	}

// 	@media (max-width: 576px) {
// 		padding: 4px;
// 	}

// 	@media (max-width: 480px) {
// 		padding: 2px;
// 	}
// `;

// export const HolidazeLogoImg = styled(HolidazeLogo)`
// 	height: 70px;

// 	@media (max-width: 2000px) {
// 		height: 60px;
// 	}

// 	@media (max-width: 1300px) {
// 		height: 50px;
// 	}

// 	@media (max-width: 992px) {
// 		height: 40px;
// 	}

// 	@media (max-width: 768px) {
// 		height: 30px;
// 	}

// 	@media (max-width: 576px) {
// 		height: 20px;
// 	}

// 	@media (max-width: 480px) {
// 		height: 15px;
// 	}

// 	&:hover {
// 		transform: scale(1.1);
// 		transform-origin: center bottom;
// 	}

// 	&:active {
// 		transform: scale(1);
// 		opacity: 0.5;
// 	}
// `;

// export const NavLinks = styled.div`
// 	width: 50%;
// 	height: 100%;
// 	display: flex;
// 	align-items: center;
// 	justify-content: flex-end;

// 	@media (max-width: 2000px) {
// 		width: 60%;
// 	}

// 	@media (max-width: 1300px) {
// 		width: 70%;
// 	}

// 	@media (max-width: 992px) {
// 		width: 80%;
// 	}

// 	@media (max-width: 768px) {
// 		width: 90%;
// 	}

// 	@media (max-width: 576px) {
// 		width: 100%;
// 	}
// `;

// export const NavLink = styled(Link)`
// 	margin: 10px 15px;
// 	font-size: xxx-large;
// 	cursor: pointer;
// 	border-bottom: 2px solid transparent;

// 	@media (max-width: 2000px) {
// 		font-size: x-large;
// 	}

// 	@media (max-width: 1300px) {
// 		font-size: large;
// 	}

// 	@media (max-width: 992px) {
// 		font-size: medium;
// 	}

// 	@media (max-width: 768px) {
// 		font-size: small;
// 	}

// 	@media (max-width: 576px) {
// 		font-size: smaller;
// 	}

// 	@media (max-width: 480px) {
// 		font-size: xx-small;
// 	}

// 	&:hover {
// 		transform: scale(1.2);
// 		transform-origin: center bottom;
// 		border-bottom: 2px solid black;
// 		margin-bottom: 25px;
// 	}

// 	&:active {
// 		transform: scale(1);
// 		color: darkgray;
// 		border-bottom: 1px solid darkgray;
// 	}
// `;

// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { ReactComponent as HolidazeLogo } from '../../assets/holidaze-logo.svg';

// export const NavigationContainer = styled.div`
// 	height: 120px;
// 	width: 100%;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	padding: 0 80px;
// 	position: relative;

// 	@media (max-width: 800px) {
// 		padding: 0 20px;
// 	}
// `;

// export const LogoContainer = styled(Link)`
// 	padding: 15px;

// 	@media (max-width: 800px) {
// 		padding: 6px;
// 	}
// `;

// export const HolidazeLogoImg = styled(HolidazeLogo)`
// 	height: 70px;

// 	@media (max-width: 800px) {
// 		height: 30px;
// 	}

// 	&:hover {
// 		transform: scale(1.1);
// 		transform-origin: center bottom;
// 	}

// 	&:active {
// 		transform: scale(1);
// 		opacity: 0.5;
// 	}
// `;

// export const NavLinks = styled.div`
// 	width: 50%;
// 	height: 100%;
// 	display: flex;
// 	align-items: center;
// 	justify-content: flex-end;

// 	@media (max-width: 800px) {
// 		display: none;
// 	}
// `;

// export const NavLink = styled(Link)`
// 	margin: 10px 15px;
// 	font-size: xxx-large;
// 	cursor: pointer;
// 	border-bottom: 2px solid transparent;

// 	@media (max-width: 800px) {
// 		display: none;
// 	}
// `;

// export const MobileNavLinks = styled.div`
// 	display: none;

// 	@media (max-width: 800px) {
// 		display: flex;
// 		flex-direction: column;
// 		align-items: center;
// 		position: absolute;
// 		top: 120px;
// 		left: 0.5%;
// 		width: 99%;
// 		background-color: white;
// 		border-radius: 0 0 10px 10px;
// 		// box-shadow: 0 10px 10px 0px rgba(0, 0, 0, 0.4), 5px 0 10px -10px rgba(0, 0, 0, 0.4), 10px 0 10px -10px rgba(0, 0, 0, 0.4);
// 		border-bottom: 2px solid lightgray;
// 		border-left: 2px solid lightgray;
// 		border-right: 2px solid lightgray;
// 		z-index: 1000;
// 		overflow: hidden;
// 	}
// `;

// export const MobileNavLink = styled(Link)`
// 	padding: 15px 0;
// 	width: 100%;
// 	text-align: center;
// 	font-size: large;
// 	cursor: pointer;
// 	border-bottom: 2px solid transparent;

// 	&:hover {
// 		background-color: #f0f0f0;
// 	}

// 	&:active {
// 		color: darkgray;
// 		border-bottom: 1px solid darkgray;
// 	}
// `;

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as HolidazeLogo } from '../../assets/holidaze-logo.svg';

export const NavigationContainer = styled.div`
	height: 120px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 80px;
	position: relative;

	@media (max-width: 1300px) {
		padding: 0 60px;
	}

	@media (max-width: 992px) {
		padding: 0 40px;
	}

	@media (max-width: 768px) {
		padding: 0 20px;
	}

	@media (max-width: 576px) {
		padding: 0 10px;
	}

	@media (max-width: 480px) {
		padding: 0 5px;
	}
`;

export const LogoContainer = styled(Link)`
	padding: 15px;

	@media (max-width: 1300px) {
		padding: 12px;
	}

	@media (max-width: 992px) {
		padding: 10px;
	}

	@media (max-width: 768px) {
		padding: 8px;
	}

	@media (max-width: 576px) {
		padding: 6px;
	}

	@media (max-width: 480px) {
		padding: 4px;
	}
`;

export const HolidazeLogoImg = styled(HolidazeLogo)`
	height: 70px;

	@media (max-width: 1300px) {
		height: 60px;
	}

	@media (max-width: 992px) {
		height: 50px;
	}

	@media (max-width: 800px) {
		height: 40px;
	}

	@media (max-width: 576px) {
		height: 30px;
		margin-left: -12px;
	}

	@media (max-width: 480px) {
		height: 30px;
	}

	&:hover {
		transform: scale(1.04);
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

	@media (max-width: 1300px) {
		width: 60%;
	}

	@media (max-width: 992px) {
		width: 70%;
	}

	@media (max-width: 800px) {
		width: 80%;
		display: none;
	}

	@media (max-width: 576px) {
		width: 90%;
	}

	@media (max-width: 480px) {
		width: 100%;
	}
`;

export const NavLink = styled(Link)`
	margin: 10px 15px;
	font-size: xx-large;
	cursor: pointer;
	border-bottom: 2px solid transparent;

	@media (max-width: 1300px) {
		font-size: x-large;
	}

	@media (max-width: 992px) {
		font-size: x-large;
	}

	@media (max-width: 800px) {
		font-size: large;
		display: none;
	}

	@media (max-width: 576px) {
		font-size: medium;
	}

	@media (max-width: 480px) {
		font-size: small;
	}

	&:hover {
		transform: scale(1.04);
		transform-origin: center bottom;
	}

	&:active {
		transform: scale(1);
		opacity: 0.5;
	}
`;

export const MobileNavLinks = styled.div`
	display: none;

	@media (max-width: 800px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		top: 120px;
		left: 50%;
		transform: translateX(-50%);
		width: 95%;
		background-color: white;
		border-radius: 0 0 10px 10px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
		border-bottom: 2px solid lightgray;
		border-left: 2px solid lightgray;
		border-right: 2px solid lightgray;
		z-index: 1000;
	}

	@media (max-width: 576px) {
		width: 98%;
	}

	@media (max-width: 480px) {
		width: 100%;
	}
`;

export const MobileNavLink = styled(Link)`
	padding: 15px 0;
	width: 100%;
	text-align: center;
	font-size: x-large;
	cursor: pointer;
	border-bottom: 2px solid transparent;

	&:hover {
		background-color: #f0f0f0;
	}

	&:active {
		color: darkgray;
		border-bottom: 1px solid darkgray;
	}

	@media (max-width: 1300px) {
		font-size: x-large;
	}

	@media (max-width: 992px) {
		font-size: x-large;
	}

	@media (max-width: 800px) {
		font-size: x-large;
	}

	@media (max-width: 576px) {
		font-size: medium;
	}

	@media (max-width: 480px) {
		font-size: large;
	}
`;
