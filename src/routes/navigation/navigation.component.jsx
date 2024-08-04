import React, { Fragment, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { useLogout } from '../../utils/api/auth/signout';
import { NavigationContainer, LogoContainer, HolidazeLogoImg, NavLinks, NavLink, MobileNavLinks, MobileNavLink } from './navigation.styles';
import Footer from '../../components/footer-section/footer-section.component';
import Hamburger from '../../components/hamburger-menu/hamburger.component';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { signOut } = useLogout();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<HolidazeLogoImg />
				</LogoContainer>
				<Hamburger onClick={toggleMenu} />
				<NavLinks>
					<NavLink to='/explore'>Explore Venues</NavLink>
					{currentUser ? (
						<>
							<NavLink to={`/profile/${currentUser.name}`}>My Profile</NavLink>
							<NavLink as='span' onClick={signOut}>
								Sign Out
							</NavLink>
						</>
					) : (
						<NavLink to='auth/signin'>Log In</NavLink>
					)}
				</NavLinks>
				{isMenuOpen && (
					<MobileNavLinks>
						<MobileNavLink to='/explore' onClick={toggleMenu}>
							Explore Venues
						</MobileNavLink>
						{currentUser ? (
							<>
								<MobileNavLink to={`/profile/${currentUser.name}`} onClick={toggleMenu}>
									My Profile
								</MobileNavLink>
								<MobileNavLink
									as='span'
									onClick={() => {
										signOut();
										toggleMenu();
									}}
								>
									Sign Out
								</MobileNavLink>
							</>
						) : (
							<MobileNavLink to='auth/signin' onClick={toggleMenu}>
								Log In
							</MobileNavLink>
						)}
					</MobileNavLinks>
				)}
			</NavigationContainer>
			<Outlet />
			<Footer />
		</Fragment>
	);
};

export default Navigation;
