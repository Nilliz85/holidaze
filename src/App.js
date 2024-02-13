import React from 'react';
import HeroSection from './components/hero-section/hero-section.component';
import Header from './components/header-section/header-section.component';
import PopularVenuesComponent from './components/venues/popular-venues/popular-venues.component';
import './routes/home/home.styles.scss';

const App = () => {
	return (
		<div className='landingpage-container'>
			<Header />
			<main>
				<HeroSection />
				<PopularVenuesComponent />
				<div>info section</div>
				<div>commercial section</div>
			</main>
			<footer>
				<div>footer section</div>
			</footer>
		</div>
	);
};

export default App;
