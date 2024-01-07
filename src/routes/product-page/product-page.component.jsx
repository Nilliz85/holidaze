import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';
import SearchBox from '../../components/search-boox/search-box.component';
import { ProductsPageContainer, ProductsContainer } from './product-page.styles';

const ProductPage = () => {
	const { products, isLoading, error } = useContext(ProductsContext);
	const [searchField, setSearchField] = useState('');

	const onSearchChange = (event) => {
		const searchValue = event.target.value.toLowerCase();
		setSearchField(searchValue);
	};

	const filteredProducts = searchField
		? products.filter((product) => {
				return product.title.toLowerCase().includes(searchField) || product.tags.some((tag) => tag.toLowerCase().includes(searchField));
		  })
		: products;

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<ProductsPageContainer>
			<SearchBox placeholder='Search products' onChangeHandler={onSearchChange} />
			<ProductsContainer>
				{filteredProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</ProductsContainer>
		</ProductsPageContainer>
	);
};

export default ProductPage;
