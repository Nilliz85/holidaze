import React, { useState, useEffect } from 'react';
import { LocationSearchContainer, LocationSearchBody,LocationSearchBodySection, LocationSearchInput, LocationSearchBodyButton, LocationSearchBodyButtonArrow, DateSearchInput } from './hero-search.styles';

const HeroSearch = () => {
  const [arrivalDate, setArrivalDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [minCheckoutDate, setMinCheckoutDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today.valueOf() + 86400000);

    setArrivalDate(today.toISOString().split('T')[0]);
    setCheckoutDate(tomorrow.toISOString().split('T')[0]);
    setMinCheckoutDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  const handleArrivalDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const nextDay = new Date(selectedDate.valueOf() + 86400000);

    setArrivalDate(e.target.value);
    setMinCheckoutDate(nextDay.toISOString().split('T')[0]);

    // If the current checkout date is before the new minimum, reset it
    if (checkoutDate && (new Date(checkoutDate) <= selectedDate)) {
      setCheckoutDate(nextDay.toISOString().split('T')[0]);
    }
  };

  return (
    <LocationSearchContainer>
      <LocationSearchBody>
        <LocationSearchBodySection>
          <h3>Location</h3>
          <LocationSearchInput
            type="text"
            className="location-search-input"
            id="locationInput"
            name="location"
            placeholder="Trysil"
          />
        </LocationSearchBodySection>
        <div>
          <h3>Check-In</h3>
          <DateSearchInput
            type="date"
            className='location-search-input'
            id="arrivalInput"
            name="arrival"
            value={arrivalDate}
            onChange={handleArrivalDateChange}
          />
        </div>
        <div>
          <h3>Check-Out</h3>
          <DateSearchInput
            type="date"
            className='location-search-input'
            id="checkoutInput"
            name="checkout"
            value={checkoutDate}
            min={minCheckoutDate}
            onChange={(e) => setCheckoutDate(e.target.value)}
          />
        </div>
        <LocationSearchBodyButton>
          <LocationSearchBodyButtonArrow>&#10148;</LocationSearchBodyButtonArrow>
        </LocationSearchBodyButton>
      </LocationSearchBody>
    </LocationSearchContainer>
  );
};

export default HeroSearch;