import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%; /* Changed to 90% for responsiveness */
	max-width: 570px; /* Added a max-width */
	justify-content: center; /* Center align the form */
	margin: 0 auto; /* Center align the container */

	h2 {
		margin: 10px 0;
		font-size: xx-large;
	}

	span {
		font-size: x-large;
	}

	@media (max-width: 768px) {
		h2 {
			font-size: large; /* Adjust font-size for smaller screens */
		}

		span {
			font-size: medium; /* Adjust font-size for smaller screens */
		}
	}
`;

export const SignInParagraph = styled.p`
	text-align: center;
	margin: 20px;

	span {
		font-size: x-large;
	}

	@media (max-width: 768px) {
		span {
			font-size: medium; /* Adjust font-size for smaller screens */
		}
	}
`;

export const StyledSignInLink = styled(Link)`
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

	@media (max-width: 768px) {
		font-size: medium; /* Adjust font-size for smaller screens */
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;

	@media (max-width: 768px) {
		flex-direction: column; /* Stack buttons vertically on smaller screens */
		align-items: center; /* Center align the buttons */
	}
`;

export const FormGroup = styled.div`
	margin-bottom: 15px;

	label {
		display: block;
		margin-bottom: 5px;
		font-size: large;
	}

	input {
		width: 100%;
		padding: 10px;
		font-size: large;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
	}
`;
