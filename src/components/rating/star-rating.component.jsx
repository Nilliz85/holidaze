import React from 'react';
import { FilledStar, EmptyStar } from './star-rating.styles';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FilledStar key={i}>★</FilledStar>);
    } else {
      stars.push(<EmptyStar key={i}>☆</EmptyStar>);
    }
  }
  return <div>{stars}</div>;
};

export default StarRating;