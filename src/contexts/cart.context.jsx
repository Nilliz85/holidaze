import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, venueToAdd) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === venueToAdd.id);

	if (existingCartItem) {
		return cartItems.map((cartItem) => (cartItem.id === venueToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
	}

	return [...cartItems, { ...venueToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemIdToRemove) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemIdToRemove.id);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== itemIdToRemove.id);
	}
	return cartItems.map((cartItem) => (cartItem.id === itemIdToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
};

const clearCartItem = (cartItems, itemIdToClear) => {
	return cartItems.filter((cartItem) => cartItem.id !== itemIdToClear.id);
};

export const CartContext = createContext({
	isCartOpen: false,
	toggleHidden: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		setCartCount(cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0));
	}, [cartItems]);

	useEffect(() => {
		setCartTotal(cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0));
	}, [cartItems]);

	const addItemToCart = (venueToAdd) => {
		setCartItems(addCartItem(cartItems, venueToAdd));
	};

	const removeItemFromCart = (itemIdToRemove) => {
		setCartItems((currentCartItems) => removeCartItem(currentCartItems, itemIdToRemove));
	};

	const clearItemFromCart = (itemIdToClear) => {
		setCartItems((currentCartItems) => clearCartItem(currentCartItems, itemIdToClear));
	};

	const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, cartTotal };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
