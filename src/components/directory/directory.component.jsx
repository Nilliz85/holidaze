import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

const Directory = ({ products }) => {
	return (
		<DirectoryContainer>
			{products.map((product) => (
				<DirectoryItem key={product.id} product={product} />
			))}
		</DirectoryContainer>
	);
};

export default Directory;
