import React from 'react';
import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

const Directory = ({ venues, columns }) => {
	return (
		<DirectoryContainer numColumns={columns}>
			{venues.map((venue) => (
				<DirectoryItem key={venue.id} venue={venue} />
			))}
		</DirectoryContainer>
	);
};

export default Directory;
