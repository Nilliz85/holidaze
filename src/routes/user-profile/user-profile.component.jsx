import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { getUserBookings } from '../../utils/api/profiles/getUserBookings';
import { fetchProfileByName } from '../../utils/api/profiles/getProfiles';
import { cancelBooking } from '../../components/bookings/bookings.component';
import { ProfileContainer, BookingList, BookingItem, ProfileDetails, ProfilePicture, MediaImage } from './user-profile.styles';

const UserProfile = () => {
	const { username } = useParams();
	const { currentUser } = useContext(UserContext);
	const [profile, setProfile] = useState(null);
	const [bookings, setBookings] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProfile = async () => {
			if (username) {
				try {
					const userProfile = await fetchProfileByName(username);
					setProfile(userProfile);
					const userBookings = await getUserBookings(username);
					setBookings(userBookings);
				} catch (error) {
					console.error('Failed to fetch profile or bookings:', error);
				} finally {
					setLoading(false);
				}
			}
		};

		fetchProfile();
	}, [username]);

	const handleCancelBooking = async (bookingId) => {
		try {
			const response = await cancelBooking(bookingId);
			if (response.success) {
				// Update the bookings state to remove the canceled booking
				setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== bookingId));
			} else {
				console.error('Failed to cancel booking:', response.message);
			}
		} catch (error) {
			console.error('Failed to cancel booking:', error);
		}
	};

	if (!currentUser) {
		return <div>Please sign in to view your profile.</div>;
	}

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!profile) {
		return <div>Profile not found.</div>;
	}

	if (!Array.isArray(bookings) || bookings.length === 0) {
		return <div>No bookings available.</div>;
	}

	return (
		<ProfileContainer>
			<ProfilePicture src={profile.avatar} alt={`${profile.name}'s avatar`} />
			<ProfileDetails>
				<h1>{profile.name}'s Profile</h1>
				<p>Email: {profile.email}</p>
			</ProfileDetails>
			<h2>Your Bookings</h2>
			<BookingList>
				{bookings.map((booking) => {
					return (
						<BookingItem key={booking.id}>
							<div>
								{booking.venue ? (
									<>
										<strong>{booking.venue.name}</strong>
										<br />
										{booking.venue.address}, {booking.venue.city}, {booking.venue.country}
										<br />
										From {new Date(booking.dateFrom).toLocaleDateString()} to {new Date(booking.dateTo).toLocaleDateString()}
										{booking.venue.media && booking.venue.media.length > 0 && (
											<div>
												{booking.venue.media.map((media, index) => (
													<MediaImage key={index} src={media} alt='Venue' />
												))}
											</div>
										)}
									</>
								) : (
									<>Booking details unavailable</>
								)}
							</div>
							<button onClick={() => handleCancelBooking(booking.id)}>Cancel Booking</button>
						</BookingItem>
					);
				})}
			</BookingList>
		</ProfileContainer>
	);
};

export default UserProfile;
