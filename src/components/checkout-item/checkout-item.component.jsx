import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
	const clearItemFromCartHandler = () => clearItemFromCart(cartItem);
	const removeItemFromCartHandler = () => removeItemFromCart(cartItem);
	const addItemFromCartHandler = () => addItemToCart(cartItem);

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt={`${name}`} />
			</div>

			<div className='arrow'> </div>
			<span className='name'>{name}</span>

			<span className='quantity'>
				<div className='decrement-button' onClick={removeItemFromCartHandler}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div className='increment-button' onClick={addItemFromCartHandler}>
					&#10095;
				</div>
			</span>
			<span className='price'>${price}</span>
			<div className='clear-item-button' onClick={clearItemFromCartHandler}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
