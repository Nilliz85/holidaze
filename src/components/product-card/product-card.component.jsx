import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { ProductCardContainer, ProductCardFooter, NameContainer, PriceContainer } from './product-card.styles';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);
	const addProductToCart = () => addItemToCart(product);

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ProductCardFooter>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
			</ProductCardFooter>
			<Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
				ADD TO CART
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
