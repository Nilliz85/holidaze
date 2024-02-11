import React, { useState, useEffect } from 'react';
import './searchform.styles.scss';

const SearchForm = () => {
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
    <div className='location-search-container'>
      <div className="location-search-body">
        <div>
          <h3>Location</h3>
          <input
            type="text"
            className="location-search-input"
            id="locationInput"
            name="location"
            placeholder="Trysil"
          />
        </div>
        <div>
          <h3>Check-In</h3>
          <input
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
          <input
            type="date"
            className='location-search-input'
            id="checkoutInput"
            name="checkout"
            value={checkoutDate}
            min={minCheckoutDate}
            onChange={(e) => setCheckoutDate(e.target.value)}
          />
        </div>
        <button className="rounded-button">
          <span className="button-arrow">&#10148;</span>
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
