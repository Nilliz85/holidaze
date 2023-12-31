import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
	const { imageUrl, title } = category;
	const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
	// const capitalizeTitle = (string) => string.toUpperCase();
	return (
		<div className='category-container'>
			<div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='category-body-container'>
				<h2>{capitalizeFirstLetter(title)}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default CategoryItem;
