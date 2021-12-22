import React from "react";
import {
	StyledFooterComponent,
	StyledFooterLogo,
	StyledFooterText,
} from "./Footer.style";
import logo from "assets/logo.png";
function Footer() {
	return (
		<StyledFooterComponent>
			<StyledFooterLogo src={logo} />
			<StyledFooterText>
				Copyright © 2021. UniteWellness All rights reserved.
			</StyledFooterText>
		</StyledFooterComponent>
	);
}

export default Footer;
