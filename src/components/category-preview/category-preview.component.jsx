import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import { Fragment } from 'react';
import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {
	return (
		<Fragment>
			<h2>
				<Link className='category-preview-title' to={title}>
					{title.toUpperCase()}
				</Link>
			</h2>
			<div className='category-preview-container'>
				<div className='preview'>
					{products
						.filter((_, idx) => idx < 4)
						.map((products) => (
							<ProductCard key={products.id} product={products} />
						))}
				</div>
			</div>
		</Fragment>
	);
};

export default CategoryPreview;
