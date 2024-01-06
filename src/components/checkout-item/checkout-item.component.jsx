import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
	CheckoutItemContainer,
	FixedSizeImageContainer,
	StyledImage,
	CartItemName,
	CartItemQuantity,
	DecrementButton,
	IncrementButton,
	Value,
	CartItemPrice,
	ClearCartItemButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
	const clearItemFromCartHandler = () => clearItemFromCart(cartItem);
	const removeItemFromCartHandler = () => removeItemFromCart(cartItem);
	const addItemFromCartHandler = () => addItemToCart(cartItem);

	return (
		<CheckoutItemContainer>
			<FixedSizeImageContainer>
				<StyledImage src={imageUrl} alt={`${name}`} />
			</FixedSizeImageContainer>

			<CartItemName>{name}</CartItemName>

			<CartItemQuantity>
				<DecrementButton onClick={removeItemFromCartHandler}> &#10094; </DecrementButton>
				<Value>{quantity}</Value>
				<IncrementButton onClick={addItemFromCartHandler}> &#10095; </IncrementButton>
			</CartItemQuantity>
			<CartItemPrice>${price}</CartItemPrice>
			<ClearCartItemButton onClick={clearItemFromCartHandler}> &#10005; </ClearCartItemButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
