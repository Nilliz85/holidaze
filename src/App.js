import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import AuthenticationSignIn from './routes/authentication/authentication-signin.component';
import AuthenticationSignUp from './routes/authentication/authentication-signup.component';
import ExploreVenues from './routes/explore-venues/explore-venues.component';
import VenueDetail from './routes/venuedetails/venuedetails.component';
import UserProfile from './routes/user-profile/user-profile.component';
import { GlobalStyle } from './global.styles';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='explore/' element={<ExploreVenues />} />
					<Route path='venues/:venueId' element={<VenueDetail />} />
					<Route path='auth/signin/' element={<AuthenticationSignIn />} />
					<Route path='auth/signup/' element={<AuthenticationSignUp />} />
					<Route path='profile/:username' element={<UserProfile />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
