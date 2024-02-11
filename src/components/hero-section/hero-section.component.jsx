import React from 'react';
import heroImage from '../../assets/placeholders/hero-placeholder.jpeg';
import SearchForm from '../searchform/searchform.component';
import './hero-section.styles.scss';

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <img className='hero-image' src={heroImage} alt='hero' />
      <SearchForm />
    </div>
  );
};


export default HeroSection;
