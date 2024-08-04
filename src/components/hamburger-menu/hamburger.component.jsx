import React from 'react';
import { HamburgerIconContainer, HamburgerLine } from './hamburger.styles';

const Hamburger = ({ onClick }) => (
	<HamburgerIconContainer onClick={onClick}>
		<HamburgerLine />
		<HamburgerLine />
		<HamburgerLine />
	</HamburgerIconContainer>
);

export default Hamburger;
