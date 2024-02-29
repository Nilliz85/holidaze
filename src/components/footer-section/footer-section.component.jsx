import React from 'react';
import {FooterContainer, Logo, FooterContent, LogoSection, LogoText, FooterList, FooterListItem, MadeByText} from './footer-section.styles';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterContent>
        <LogoSection>
        <Logo>Holidaze</Logo>
				<LogoText>
					<p>Your trusted venue booking platform</p>
					<p>Since 2024!</p>
				</LogoText>
        </LogoSection>


				<FooterList>
					<ol>
						<FooterListItem>Help</FooterListItem>
						<FooterListItem>About us</FooterListItem>
						<FooterListItem>Contact us</FooterListItem>
					</ol>
				</FooterList>
			</FooterContent>

			<MadeByText>
				<p>© 2024 by Holidaze. Created by Per Edward</p>
			</MadeByText>
		</FooterContainer>
	);
};

export default Footer;