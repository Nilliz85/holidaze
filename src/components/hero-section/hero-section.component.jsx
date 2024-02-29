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
import {HeroSectionContainer, HeroImage, HeroTitle, HeroText} from './hero-section.styles';

const HeroSection = () => {
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


<<<<<<< HEAD
export default HeroSection;
=======
export default HeroSection;
>>>>>>> development-styledcomponents
