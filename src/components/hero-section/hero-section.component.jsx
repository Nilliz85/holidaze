import React from 'react';
<<<<<<< HEAD
import heroImage from '../../assets/placeholders/hero-placeholder.jpeg';
import SearchForm from '../searchform/searchform.component';
import './hero-section.styles.scss';

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <img className='hero-image' src={heroImage} alt='hero' />
      <SearchForm />
    </div>
=======
import HeroSearch from './hero-search.component';
import heroImage from '../../assets/hero-img.jpeg';
import { HeroSectionContainer, HeroImage, HeroTitle, HeroText } from './hero-section.styles';

const HeroSection = () => {
<<<<<<< Updated upstream
  return (
    <HeroSectionContainer>
      <HeroImage src={heroImage} alt='Hero-Image' />
      <HeroTitle></HeroTitle>
      <HeroText></HeroText>
      <HeroSearch />
    </HeroSectionContainer>
>>>>>>> development-styledcomponents
  );
};


<<<<<<< Updated upstream
<<<<<<< HEAD
export default HeroSection;
=======
export default HeroSection;
>>>>>>> development-styledcomponents
=======
export default HeroSection;
=======
	return (
		<HeroSectionContainer>
			<HeroImage src={heroImage} alt='Hero-Image' />
			<HeroTitle></HeroTitle>
			<HeroText></HeroText>
			<HeroSearch />
		</HeroSectionContainer>
	);
};

export default HeroSection;
>>>>>>> Stashed changes
>>>>>>> Stashed changes
