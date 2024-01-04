import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
	const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
	const { name, imageUrl, price, quantity } = cartItem;

	const removeItemFromCartHandler = () => removeItemFromCart(cartItem);
	const addItemFromCartHandler = () => addItemToCart(cartItem);
	const clearItemFromCartHandler = () => clearItemFromCart(cartItem);

	return (
		<div className='cart-item-container'>
			<img src={imageUrl} alt={`${name}`} />
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span className='price'>
					<div className='decrement-item-button' onClick={removeItemFromCartHandler}>
						&#10094;
					</div>
					<span className='value'> {quantity} </span>
					<div className='increment-item-button' onClick={addItemFromCartHandler}>
						&#10095;
					</div>
					<span className='price-value'> x ${price} </span>
				</span>
			</div>
			<div className='clear-item-button' onClick={clearItemFromCartHandler}>
				&#10005;
			</div>
		</div>
	);
};

export default CartItem;
