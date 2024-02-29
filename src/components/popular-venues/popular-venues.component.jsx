import React, { useState, useEffect } from 'react';
import { fetchVenues } from '../../utils/api/venues/get-venues';
import Directory from '../directory/directory.component';
import { PopularVenuesSection, SectionHeader } from './popular-venues.styles'; 


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
    

        setVenues(topRatedVenues.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    };
 
		getVenues();
	}, []);

  return (
    <PopularVenuesSection>
      <SectionHeader>Popular Venues</SectionHeader>
      <Directory venues={venues} columns={5} />
    </PopularVenuesSection>
  );
};

export default PopularVenuesComponent;
