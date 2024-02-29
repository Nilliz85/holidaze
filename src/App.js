<<<<<<< HEAD
import React from 'react';
import HomeComponent from './routes/home/home.component';
import './routes/home/home.styles.scss';

const App = () => {
	return (
		<HomeComponent />
=======
import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import ExploreVenues from './routes/explore-venues/explore-venues.component';
import VenueDetail from './routes/venuedetails/venuedetails.component';
import VenuePage from './routes/venue-page/venue-page.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='explore/' element={<ExploreVenues />} />
				{/* <Route path='explore/' element={<VenuePage />} /> */}
				<Route path='venues/:venueId' element={<VenueDetail />} />
				<Route path='venues/' element={<VenuePage />} />
				<Route path='auth' element={<Authentication />} />
			</Route>
		</Routes>
>>>>>>> development-styledcomponents
	);
};

export default App;
<<<<<<< HEAD
=======

// "79b763da-5c3d-4cda-bb10-f4f4e1bdf9c6"
>>>>>>> development-styledcomponents
