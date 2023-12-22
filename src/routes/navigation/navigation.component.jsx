import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as RoyalLogo } from '../../assets/royal-rags-logo.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutAuthUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<RoyalLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
					{currentUser ? (
						<span className='nav-link' onClick={signOutAuthUser}>
							{' '}
							SIGN OUT{' '}
						</span>
					) : (
						<Link className='nav-link' to='/auth'>
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				<CartDropdown />
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
