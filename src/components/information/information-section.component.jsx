import React from 'react';
import './information-section.styles.scss';
//import your icon images here, below are placeholders
import bestPriceIcon from '../../assets/icons/holidaze-creditcard.svg';
import refundIcon from '../../assets/icons/holidaze-guarantee.svg';
import covidInfoIcon from '../../assets/icons/holidaze-virus.svg';

const InformationSection = () => {
	return (
		<div className='information-section'>
			<div className='info-item'>
				<img src={refundIcon} alt='Best Price Guarantee' className='info-icon' />
				<h3>Best Price Guarantee</h3>
				<p>We offer the best deals.</p>
			</div>
			<div className='info-item'>
				<img src={bestPriceIcon} alt='Refunds & Cancellations' className='info-icon' />
				<h3>Refunds & Cancellations</h3>
				<p>Flight Cancellation Protection</p>
			</div>
			<div className='info-item'>
				<img src={covidInfoIcon} alt='COVID-19 Information' className='info-icon' />
				<h3>COVID-19 Information</h3>
				<p>COVID-19 Travel Restrictions</p>
			</div>
		</div>
	);
};

export default InformationSection;
