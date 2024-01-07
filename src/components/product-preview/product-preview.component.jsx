import React, { useState, useEffect } from 'react';
import { ProductCard } from '../product-card/product-card.component';
import { ProductPreviewContainer } from './product-preview.styles';
import { fetchProducts } from '../../utils/api/api';

const ProductPreview = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const initFetch = async () => {
			try {
				const productsData = await fetchProducts();
				setProducts(productsData);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		initFetch();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<ProductPreviewContainer>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</ProductPreviewContainer>
	);
};

export default ProductPreview;
