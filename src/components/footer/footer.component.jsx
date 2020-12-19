import React from "react";
import "./footer.styles.scss";

const Footer = () => {
	return (
		<footer className="footer flex justify-center items-center">
			<div className="container flex justify-center items-center ">
				<nav className="footer-nav">
					<a
						target="_blank"
						rel="noreferrer noopener"
						href="https://github.com/amsIII"
					>
						<i class="fab fa-github"></i>
					</a>
					<a
						target="_blank"
						rel="noreferrer noopener"
						href="https://codesandbox.io/u/amsiii"
					>
						<i class="fab fa-codepen"></i>
					</a>
					<a
						target="_blank"
						rel="noreferrer noopener"
						href="https://www.instagram.com/KindOfADev/"
					>
						<i class="fab fa-instagram"></i>
					</a>
					<a
						target="_blank"
						rel="noreferrer noopener"
						href="https://www.youtube.com/channel/UCp1rLj8Sm3077g9Z-fpeglQ"
					>
						<i class="fab fa-youtube"></i>
					</a>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
