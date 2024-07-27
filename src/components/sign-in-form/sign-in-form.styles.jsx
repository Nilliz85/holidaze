import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignInContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 570px;

	h2 {
		margin: 10px 0;
		font-size: xx-large;
	}

	span {
		font-size: x-large;
	}
`;

export const SignUpParagraph = styled.p`
	text-align: center;
	margin: 20px;

	span {
		font-size: x-large;
	}
`;

export const StyledSignUpLink = styled(Link)`
	font-size: x-large;
	cursor: pointer;
	border-bottom: 2px solid transparent;

	&:hover {
		border-bottom: 3px solid black;
	}

	&:active {
		color: darkgray;
		border-bottom: 2px solid darkgray;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;
