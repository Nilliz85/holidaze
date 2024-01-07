import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import { API_URL } from '../../utils/api/api';
import { TrendingTitle } from './home.component.styles';

const Home = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(`${API_URL}`);
				if (!response.ok) {
					throw new Error('Could not fetch products');
				}
				const data = await response.json();
				setProducts(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchProducts();
	}, []);

	const selectRandomProducts = (products, num = 5) => {
		return products
			.sort(() => 0.5 - Math.random())
			.slice(0, num)
			.map((product) => ({
				id: product.id,
				title: product.title,
				imageUrl: product.imageUrl,
			}));
	};

	const trendingProducts = selectRandomProducts(products);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<TrendingTitle>Trending Products</TrendingTitle>
			<Outlet />
			{trendingProducts.length > 0 && <Directory products={trendingProducts} />}
		</div>
	);
};

export default Home;
