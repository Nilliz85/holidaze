import { useContext, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../../components/product-card/product-card.component';
import { CategoriesContext } from '../../../contexts/categories.context';
import '../shop.styles.scss';

const CategoryPage = () => {
	const { categoryTitle } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const categoryProducts = categoriesMap[categoryTitle.toLowerCase()];
	const capitalizeTitle = (string) => string.toUpperCase();

	return (
		<Fragment key={categoryTitle}>
			<h2>{capitalizeTitle(categoryTitle)}</h2>
			<div className='products-container'>
				{categoryProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</Fragment>
	);
};

export default CategoryPage;
