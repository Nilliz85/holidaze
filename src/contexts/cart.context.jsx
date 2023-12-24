import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

	if (existingCartItem) {
		return cartItems.map((cartItem) => (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemIdToRemove) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemIdToRemove);

	if (existingCartItem && existingCartItem.quantity > 1) {
		return cartItems.map((cartItem) => (cartItem.id === itemIdToRemove ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
	} else {
		return cartItems.filter((cartItem) => cartItem.id !== itemIdToRemove);
	}
};

export const CartContext = createContext({
	isCartOpen: false,
	toggleHidden: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartCount: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		setCartCount(cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0));
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const removeItemFromCart = (itemId) => {
		setCartItems((currentCartItems) => removeCartItem(currentCartItems, itemId));
	};

	const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, cartItems, cartCount };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
