import React from 'react';
import './star-rating.styles.scss';

const StarRating = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="filled-star">★</span>);
    } else {
      stars.push(<span key={i} className="empty-star">☆</span>);
    }
  }
  return stars;
};


export default StarRating;