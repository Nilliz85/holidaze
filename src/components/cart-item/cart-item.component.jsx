import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
	CartItemContainer,
	StyledCartImage,
	ItemDetails,
	CartItemName,
	CartItemPrice,
	DecrementItemButton,
	IncrementItemButton,
	CartValue,
	CartPriceValue,
	ClearCartItemButton,
} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
	const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
	const { name, imageUrl, price, quantity } = cartItem;

	const removeItemFromCartHandler = () => removeItemFromCart(cartItem);
	const addItemFromCartHandler = () => addItemToCart(cartItem);
	const clearItemFromCartHandler = () => clearItemFromCart(cartItem);

	return (
		<CartItemContainer>
			<StyledCartImage src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<CartItemName>{name}</CartItemName>
				<CartItemPrice>
					<DecrementItemButton onClick={removeItemFromCartHandler}>&#10094;</DecrementItemButton>
					<CartValue> {quantity} </CartValue>
					<IncrementItemButton onClick={addItemFromCartHandler}>&#10095;</IncrementItemButton>
					<CartPriceValue> x ${price} </CartPriceValue>
				</CartItemPrice>
			</ItemDetails>
			<ClearCartItemButton onClick={clearItemFromCartHandler}> &#10005; </ClearCartItemButton>
		</CartItemContainer>
	);
};

export default CartItem;
