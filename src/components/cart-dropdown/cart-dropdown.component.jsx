import { Fragment, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, EmptyCartMessage, CartDropdownItems, CartDropdownTotal, DropdownCheckoutButton } from './cart-dropdown.styles';

const CartDropdown = () => {
	const { cartItems, cartTotal, isCartOpen, setIsCartOpen } = useContext(CartContext);
	const navigate = useNavigate();
	const dropdownRef = useRef();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (isCartOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsCartOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isCartOpen, setIsCartOpen]);

	const goToCheckoutHandler = () => {
		navigate('/checkout');
		setIsCartOpen(false); // Close dropdown when navigating away
	};

	return (
		<CartDropdownContainer ref={dropdownRef}>
			<CartDropdownItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyCartMessage>Your cart is empty</EmptyCartMessage>
				)}
			</CartDropdownItems>
			{cartItems.length > 0 && (
				<Fragment>
					<CartDropdownTotal>Total: ${cartTotal}</CartDropdownTotal>
					<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
				</Fragment>
			)}
		</CartDropdownContainer>
	);
};

export default CartDropdown;
