import styled from 'styled-components';

export const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	padding: 50px 40px;
	padding-bottom: 0;
	margin-bottom: 0px;
	margin-top: 200px;
	background-color: #f2f2f2;
`;
export const FooterContent = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	height: 100%;
`;
export const LogoSection = styled.div`
	display: flex;
	flex-direction: column;
	line-height: 0.7;
	justify-content: center;
	padding: 0 20px;
`;

export const Logo = styled.div`
	width: min-content;
	font-size: 2.2rem;
	font-weight: bold;
	cursor: pointer;
	color: #3e3e3e;
	&:hover {
		transform: scale(1.15);
		transform-origin: left top;
	}
	&:active {
		transform: scale(1);
	}
`;

export const LogoText = styled.span`
	font-size: 1.2rem;
	color: #737373;
`;

export const FooterList = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	list-style: none;
`;

export const FooterListItem = styled.li`
	padding: 0 20px;
	cursor: pointer;
	color: #3e3e3e;
	font-size: x-large;
	text-align: right;
	list-style: none;
	margin-bottom: 5px;

	&:first-child:hover {
		transform: scale(1.15);
		transform-origin: right bottom;
	}

	&:nth-child(2):hover {
		transform: scale(1.15);
		transform-origin: right center;
	}

	&:last-child:hover {
		transform: scale(1.15);
		transform-origin: right top;
	}

	&:active {
		transform: scale(1);
	}
`;

export const MadeByText = styled.div`
	text-align: center;
	font-size: 1.2rem;
	color: #737373;
	max-width: 20%;
	margin: auto;
	margin-bottom: 0;
	padding-bottom: 0px;
`;
