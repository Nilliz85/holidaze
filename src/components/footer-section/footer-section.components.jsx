import React from 'react';
import './footer-section.styles.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='logo'>Holidaze</div>
			<div className='footer-content'>
				<div className='logo-text'>
					<p>Your trusted venue booking platform</p>
					<p>Since 2024!</p>
				</div>

				<div className='footer-list'>
					<ol>
						<li className='footer-list-item'>Help</li>
						<li className='footer-list-item'>About us</li>
						<li className='footer-list-item'>Contact us</li>
					</ol>
				</div>
			</div>

			<div className='made-by-text'>
				<p>© 2024 by Holidaze. Proudly created by Per Edward</p>
			</div>
		</footer>
	);
};

export default Footer;
