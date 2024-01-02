import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
	const { imageUrl, title } = category;
	const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
	// const capitalizeTitle = (string) => string.toUpperCase();
	return (
		<div className='directory-item-container'>
			<div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='directory-item-body'>
				<h2>{capitalizeFirstLetter(title)}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default DirectoryItem;
