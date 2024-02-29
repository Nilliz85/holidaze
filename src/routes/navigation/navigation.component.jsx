import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { useLogout } from '../../utils/api/auth/signout';
import { NavigationContainer, LogoContainer, HolidazeLogoImg, NavLinks, NavLink } from './navigation.styles';
import Footer from '../../components/footer-section/footer-section.component';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isLoggedIn, signOut } = useLogout();

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<HolidazeLogoImg />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/explore'>Explore Venues</NavLink>
					{currentUser ? (
						<NavLink as='span' onClick={signOut}>
							{' '}
							Sign Out{' '}
						</NavLink>
					) : (
						<NavLink to='/auth'>Log In</NavLink>
					)}
				</NavLinks>
			</NavigationContainer>
			<Outlet />
			<Footer />
		</Fragment>
	);
};

export default Navigation;
