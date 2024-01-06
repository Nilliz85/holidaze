import { DirectoryItemContainer, BackgroundImage, DirectoryItemBody } from './directory-item.styles';

const DirectoryItem = ({ category }) => {
	const { imageUrl, title } = category;
	const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
	const createPathFromTitle = (title) => `/shop/${title.toLowerCase()}`;

	return (
		<DirectoryItemContainer to={createPathFromTitle(title)}>
			<BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
			<DirectoryItemBody>
				<h2>{capitalizeFirstLetter(title)}</h2>
				<p>Shop Now</p>
			</DirectoryItemBody>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
