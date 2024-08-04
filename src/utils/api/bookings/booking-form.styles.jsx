import styled from 'styled-components';
import Button from '../../../components/button/button.component';

export const BookingContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	margin-top: 50px;
`;

export const BookingFormGroup = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px; /* Adjust spacing between label-input pairs */
`;

export const BookingLabel = styled.label`
	margin-bottom: 10px; /* Adjust spacing between label and input */
	font-size: xx-large;
`;

export const BookingInput = styled.input`
	max-width: 350px;
	margin: auto;
	font-size: x-large;
`;

export const AddBookingButton = styled(Button)`
	width: 20%;
	height: 100px;
	margin: 150px auto;

	&:hover {
		opacity: 0.85;
		cursor: pointer;
	}
`;

export const SuccessAndError = styled.p`
	margin: 200px auto 0 0;
	color: red;
	font-size: xxx-large;
`;
