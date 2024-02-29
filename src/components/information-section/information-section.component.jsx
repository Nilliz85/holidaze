import React from 'react';
import bestPriceIcon from '../../assets/holidaze-guarantee-icon.svg';
import refundIcon from '../../assets/holidaze-credit-card-icon.svg';
import covidInfoIcon from '../../assets/holidaze-virus-icon.svg';
import {InformationSectionContainer, InfoItem, InfoIcon, InfoHeader, InfoText } from './information-section.styles';

const InformationSection = () => {
	return (
		<InformationSectionContainer>
			<InfoItem>
				<InfoIcon src={bestPriceIcon} alt='Best Price Guarantee'/>
				<InfoHeader>Best Price Guarantee</InfoHeader>
				<InfoText>We offer the best deals.</InfoText>
			</InfoItem>
			<InfoItem>
				<InfoIcon src={refundIcon} alt='Refunds & Cancellations' />
				<InfoHeader>Refunds & Cancellations</InfoHeader>
				<InfoText>Flight Cancellation Protection</InfoText>
			</InfoItem>
			<InfoItem>
				<InfoIcon src={covidInfoIcon} alt='COVID-19 Information' />
				<InfoHeader>COVID-19 Information</InfoHeader>
				<InfoText>COVID-19 Travel Restrictions</InfoText>
			</InfoItem>
		</InformationSectionContainer>
	);
};

export default InformationSection;