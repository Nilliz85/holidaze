import React, { useState, useEffect } from 'react';
import { fetchVenues } from '../../../utils/api/venues/getVenues';
import './popular-venues.styles.scss';

const PopularVenuesComponent = () => {
	const [venues, setVenues] = useState([]);

	useEffect(() => {
		const getVenues = async () => {
			try {
				const data = await fetchVenues();
				const topRatedVenues = data.filter((venue) => venue.rating === 5);
				setVenues(topRatedVenues.slice(0, 4));
			} catch (error) {
				console.error(error);
			}
		};

		getVenues();
	}, []);

const getImageUrl = (mediaArray) => {
  if (mediaArray.length > 0 && mediaArray[0].url) {
    return mediaArray[0].url;
  }
  console.log(mediaArray[0].url);
  return '../../../assets/placeholders/house-placeholder.png'; 
};


return (
  <div className='popular-venues-section'>
    <h2>Popular Venues</h2>
    <div className='popular-venues-container'>
      {venues.map(venue => (
        <div key={venue.id} className='popular-venue-card'>
          <img className='popular-venue-image' src={getImageUrl(venue.media)} alt={venue.name} />
          <div className='popular-venue-content'>
            <h3 className='popular-venue-name'>{venue.name}</h3>
            <p className='popular-venue-price'>Price: ${venue.price}</p>
            <p className='popular-venue-rating'>Rating: {venue.rating} stars</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default PopularVenuesComponent;
