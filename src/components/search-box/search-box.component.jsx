import React from 'react';
import { Component } from 'react';
import { SearchBar } from './search-box.styles';

const SearchBox = ({ placeholder, onChangeHandler }) => {
	return <SearchBar type='search' placeholder={placeholder} onChange={onChangeHandler} />;
};

export default SearchBox;
