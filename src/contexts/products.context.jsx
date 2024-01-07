import { createContext, useState, useEffect } from 'react';
import { fetchProducts } from '../utils/api/api';

export const ProductsContext = createContext({
	products: [],
	isLoading: false,
	error: null,
});

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getProducts = async () => {
			setIsLoading(true);
			try {
				const fetchedProducts = await fetchProducts();
				setProducts(fetchedProducts);
				console.log('Fetched Products:', fetchedProducts);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};
		getProducts();
	}, []);

	const value = { products, isLoading, error };
	return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
