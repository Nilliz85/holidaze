import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';
// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
	categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	useEffect(() => {
		const getCategoryMap = async () => {
			const categoriesMap = await getCategoriesAndDocuments('categories');
			console.log(categoriesMap);
			setCategoriesMap(categoriesMap);
		};
		getCategoryMap();
	}, []);

	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', SHOP_DATA);
	// }, []);
	const value = { categoriesMap };
	return <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>;
};
