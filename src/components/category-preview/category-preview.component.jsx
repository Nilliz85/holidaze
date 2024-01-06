import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import { Fragment } from 'react';
import { CategoryPreviewTitle, CategoryPreviewLink, CategoryPreviewContainer, Preview } from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
	return (
		<Fragment>
			<CategoryPreviewTitle>
				<CategoryPreviewLink to={title}>{title.toUpperCase()}</CategoryPreviewLink>
			</CategoryPreviewTitle>
			<CategoryPreviewContainer>
				<Preview>
					{products
						.filter((_, idx) => idx < 4)
						.map((products) => (
							<ProductCard key={products.id} product={products} />
						))}
				</Preview>
			</CategoryPreviewContainer>
		</Fragment>
	);
};

export default CategoryPreview;
