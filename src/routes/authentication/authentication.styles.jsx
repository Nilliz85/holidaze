import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
	display: flex;
	justify-content: center; /* Center the form horizontally */
	width: 90%; /* Set a flexible width */
	max-width: 1200px; /* Add a max-width */
	margin: 100px auto;
	min-height: 65vh;

	@media (max-width: 2000px) {
		max-width: 1800px; /* Fit to the xxl breakpoint */
	}

	@media (max-width: 1300px) {
		max-width: 1200px; /* Fit to the xl breakpoint */
		min-height: 58vh;
	}

	@media (max-width: 992px) {
		max-width: 900px; /* Fit to the lg breakpoint */
		min-height: 40vh;
	}

	@media (max-width: 768px) {
		max-width: 700px; /* Fit to the md breakpoint */
		width: 100%; /* Ensure it takes full width on smaller screens */
		padding: 0 10px; /* Add some padding to the sides */
		flex-direction: column; /* Stack items vertically on smaller screens */
		align-items: center; /* Center align the items */
	}

	@media (max-width: 576px) {
		max-width: 500px; /* Fit to the sm breakpoint */
		min-height: 52vh;
	}

	@media (max-width: 480px) {
		max-width: 400px; /* Fit to the xs breakpoint */
	}
`;
