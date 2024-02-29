import React from 'react';
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
  );
};


export default HeroSection;