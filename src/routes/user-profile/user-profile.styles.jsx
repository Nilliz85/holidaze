import styled from 'styled-components';

export const ProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`;

export const ProfilePicture = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	object-fit: cover;
	margin-bottom: 20px;
`;

export const ProfileDetails = styled.div`
	text-align: center;
	margin-bottom: 20px;

	h1 {
		font-size: 24px;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		color: #555;
	}
`;

export const BookingList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 20px;
	padding: 0;
	width: 100%;
	max-width: 1200px;
`;

export const BookingItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 10px;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

	div {
		font-size: 16px;
		margin-bottom: 10px;
	}

	button {
		align-self: center;
		background-color: #ff4b4b;
		color: white;
		border: none;
		padding: 10px 20px;
		cursor: pointer;
		border-radius: 5px;
		transition: background-color 0.3s;

		&:hover {
			background-color: #ff1f1f;
		}
	}
`;

export const MediaImage = styled.img`
	width: 100%;
	height: auto;
	border-radius: 5px;
	margin-top: 10px;
`;
