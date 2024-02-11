import React from 'react';
import HeroSection from './components/hero-section/hero-section.component';
import './routes/home/home.styles.scss';
import Header from './components/header-section/header-section.component';

const App = () => {
	const popularVenues = [
		{
			id: 1,
			title: 'Venue 1',
			imageUrl: 'https://via.placeholder.com/150',
			linkUrl: 'category1',
		},
		{
			id: 2,
			title: 'Venue 2',
			imageUrl: 'https://via.placeholder.com/150',
			linkUrl: 'category2',
		},
		{
			id: 3,
			title: 'Venue 3',
			imageUrl: 'https://via.placeholder.com/150',
			linkUrl: 'category3',
		},
		{
			id: 4,
			title: 'Venue 4',
			imageUrl: 'https://via.placeholder.com/150',
			linkUrl: 'category4',
		},
	];

	return (
		<div className='landingpage-container'>
      <Header />
			<main>
            <HeroSection />
				<div className='popular-venues-container'>
					{popularVenues.map(({ title, id }) => (
						<div key={id} className='popular-venue-container'>
							<div className='popular-venue-img' />
							<div className='popular-venue-body-container'>
								<h2>{title}</h2>
								<p>venue information</p>
							</div>
						</div>
					))}
				</div>
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
