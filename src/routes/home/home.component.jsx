import React from 'react';
import Header from '../../components/header-section/header-section.component';
import HeroSection from '../../components/hero-section/hero-section.component';
import PopularVenuesComponent from '../../components/venues/popular-venues/popular-venues.component';
import InformationSection from '../../components/information/information-section.component';
import Footer from '../../components/footer-section/footer-section.components';
import './home.styles.scss';

const HomeComponent = () => {
  return (
      <div className='landingpage-container'>
        <Header />
        <main>
          <HeroSection />
          <PopularVenuesComponent />
          < InformationSection/>
          <div>commercial section</div>
        </main>
        <Footer/>
      </div>
  );
}

export default HomeComponent;