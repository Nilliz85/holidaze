import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
	const { removeItemFromCart } = useContext(CartContext);
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className='cart-item-container'>
			<img src={imageUrl} alt={`${name}`} />
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} x ${price}
				</span>
			</div>

			<div className='remove-button' onClick={() => removeItemFromCart(cartItem.id)}>
				X
			</div>
		</div>
	);
};

export default CartItem;
