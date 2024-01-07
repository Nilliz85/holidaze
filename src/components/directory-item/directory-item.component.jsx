import React from 'react';
import { Link } from 'react-router-dom';
import { DirectoryItemContainer, BackgroundImage, DirectoryItemBody } from './directory-item.styles';

const DirectoryItem = ({ product }) => {
	const { id, title, imageUrl } = product;
	const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

	return (
		<DirectoryItemContainer to={`/products/${id}`} style={{ backgroundImage: `url(${imageUrl})` }}>
			<BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
			<DirectoryItemBody>
				<h2>{capitalizeFirstLetter(title)}</h2>
				<p>Shop Now</p>
			</DirectoryItemBody>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
