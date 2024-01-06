import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CheckoutContainer, CheckoutHeaderContainer, HeaderBlock, EmptyCartMessage, TotalPrice } from './checkout.styles';

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);
	return (
		<CheckoutContainer>
			<CheckoutHeaderContainer>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeaderContainer>
			{cartItems.length ? (
				cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
			) : (
				<EmptyCartMessage>
					<span> Your cart is empty </span>
				</EmptyCartMessage>
			)}
			{cartItems.length > 0 && <TotalPrice>Total: ${cartTotal}</TotalPrice>}
		</CheckoutContainer>
	);
};

export default Checkout;
