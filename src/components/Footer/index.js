import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
	FooterWrapper,
	FooterContainer,
	SocialIconLink,
} from "./Footer.styles";
// import "./footer.styles.scss";

const Footer = () => {
	return (
		<FooterWrapper>
			<FooterContainer>
				<SocialIconLink
					href="/"
					target="_blank"
					aria-label="Linkedin"
					rel="noreferrer noopener"
				>
					<FaLinkedin />
				</SocialIconLink>
				<SocialIconLink
					target="_blank"
					aria-label="Instagram"
					href="https://www.instagram.com/KindOfADev/"
					rel="noreferrer noopener"
				>
					<FaInstagram />
				</SocialIconLink>
				<SocialIconLink
					target="_blank"
					aria-label="Twitter"
					href="//www.twitter.com/briandesignz"
					rel="noreferrer noopener"
				>
					<FaTwitter />
				</SocialIconLink>
				<SocialIconLink
					target="_blank"
					aria-label="Twitter"
					href="https://github.com/amsIII"
					rel="noreferrer noopener"
				>
					<FaTwitter />
				</SocialIconLink>
			</FooterContainer>
		</FooterWrapper>

		// <footer className="footer flex justify-center items-center">
		// 	<div className="container flex justify-center items-center ">
		// 		<nav className="footer-nav">
		// 			<a
		// 				target="_blank"
		// 				rel="noreferrer noopener"
		// 				href="https://github.com/amsIII"
		// 			>
		// 				<i class="fab fa-github"></i>
		// 			</a>
		// 			<a
		// 				target="_blank"
		// 				rel="noreferrer noopener"
		// 				href="https://codesandbox.io/u/amsiii"
		// 			>
		// 				<i class="fab fa-codepen"></i>
		// 			</a>
		// 			<a
		// 				target="_blank"
		// 				rel="noreferrer noopener"
		// 				href="https://www.instagram.com/KindOfADev/"
		// 			>
		// 				<i class="fab fa-instagram"></i>
		// 			</a>
		// 			<a
		// 				target="_blank"
		// 				rel="noreferrer noopener"
		// 				href="https://www.youtube.com/channel/UCp1rLj8Sm3077g9Z-fpeglQ"
		// 			>
		// 				<i class="fab fa-youtube"></i>
		// 			</a>
		// 		</nav>
		// 	</div>
		// </footer>
	);
};

export default Footer;
