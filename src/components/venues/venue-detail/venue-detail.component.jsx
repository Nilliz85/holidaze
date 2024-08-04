import React, { useState, useEffect } from 'react';
import { fetchVenues } from '../api/venues/getVenues';

const VenueDetailComponent = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const getVenues = async () => {
      try {
        const data = await fetchVenues();
        setVenues(data);
      } catch (error) {
        console.error(error);
      }
    };

    getVenues();
  }, []);

  return (
    <div>
      {venues.map(venue => (
        <div key={venue.id}>
          <h3>{venue.name}</h3>
          <p>{venue.description}</p>
          {/* ... other venue details ... */}
        </div>
      ))}
    </div>
  );
};

export default VenueDetailComponent;
