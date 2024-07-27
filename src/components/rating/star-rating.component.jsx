import React from 'react';
<<<<<<< HEAD
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


=======
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

<<<<<<< Updated upstream
>>>>>>> development-styledcomponents
export default StarRating;
=======
<<<<<<< Updated upstream
export default StarRating;
=======
export default StarRating;
>>>>>>> Stashed changes
>>>>>>> Stashed changes
