import React, { useState, useEffect } from 'react';
import { fetchVenues } from '../../../utils/api/venues/getVenues';
import placeholderImage from '../../../assets/placeholders/house-placeholder.png';
import StarRating from '../../rating/star-rating.component';
import './popular-venues.styles.scss';

const PopularVenuesComponent = () => {
	const [venues, setVenues] = useState([]);

	useEffect(() => {
    const getVenues = async () => {
      try {
        const data = await fetchVenues();
        console.log(data);
    

        const fiveStarVenues = data.filter((venue) => venue.rating === 5);
        const fourStarVenues = data.filter((venue) => venue.rating === 4);
    

        const uniqueNames = new Set();
        const uniqueMediaUrls = new Set();
    

        const addUniqueVenues = (venues) => {
          return venues.filter((venue) => {
            const isNameUnique = !uniqueNames.has(venue.name);
            const isMediaUrlUnique = venue.media.length > 0 && !uniqueMediaUrls.has(venue.media[0]);
            if (isNameUnique && isMediaUrlUnique) {
              uniqueNames.add(venue.name);
              uniqueMediaUrls.add(venue.media[0]);
              return true;
            }
            return false;
          });
        };
        const shuffledFiveStarVenues = fiveStarVenues.sort(() => 0.5 - Math.random());
        const shuffledFourStarVenues = fourStarVenues.sort(() => 0.5 - Math.random());
    

        let topRatedVenues = addUniqueVenues(shuffledFiveStarVenues, uniqueNames);
        if (topRatedVenues.length < 4) {

          const remainingVenues = addUniqueVenues(shuffledFourStarVenues, uniqueNames);
          topRatedVenues = topRatedVenues.concat(remainingVenues);
        }
    

        setVenues(topRatedVenues.slice(0, 4));
      } catch (error) {
        console.error(error);
      }
    };
 
		getVenues();
	}, []);

const getImageUrl = (mediaArray) => {
  if (mediaArray.length > 0) {
    return mediaArray[0];
  }
  return placeholderImage; 
};


return (
  <div className='popular-venues-section'>
    <h2 className='section-header'>Popular Venues</h2>
    <div className='popular-venues-container'>
      {venues.map(venue => (
        <div key={venue.id} className='popular-venue-card'>
          <img className='popular-venue-image' src={getImageUrl(venue.media)} alt={venue.name} />
          <div className='popular-venue-content'>
            <h3 className='popular-venue-name'>{venue.name}</h3>
            <div className='price-rating'>
            <p className='popular-venue-price'>Price: ${venue.price}</p>
            <div className='popular-venue-rating'><span className='rating-text'>Rating:</span>
              {StarRating(venue.rating)}
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default PopularVenuesComponent;
