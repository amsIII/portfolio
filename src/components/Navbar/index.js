import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import Btn2 from "../Button/Button2";
import {
	NavWrap,
	NavContainer,
	LogoContainer,
	Logo,
	NavLinksWrapper,
	Home,
	NavLinks,
	Resume,
} from "./Navbar.styles";

const Navbar = () => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 30) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	const toTop = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<NavWrap scrollNav={scrollNav}>
				<NavContainer scrollNav={scrollNav}>
					<LogoContainer>
						<Btn2 scrollNav={scrollNav} btnText1={"AMSIII"} btnText2={"HOME"} />
						{/* <Logo onClick={toTop}>AMSIII</Logo> */}
					</LogoContainer>
					<NavLinksWrapper>
						{/* <Home to="/" onClick={toTop}>
							Home
						</Home> */}
						<NavLinks
							to="about"
							smooth={true}
							duration={500}
							spy={true}
							exact="true"
							offset={-80}
							scrollNav={scrollNav}
						>
							About
						</NavLinks>
						<NavLinks
							to="projects"
							smooth={true}
							duration={500}
							spy={true}
							exact="true"
							offset={-20}
							scrollNav={scrollNav}
						>
							Projects
						</NavLinks>
						<NavLinks
							to="/posts"
							smooth={true}
							duration={500}
							spy={true}
							exact="true"
							offset={-80}
							scrollNav={scrollNav}
						>
							Blog
						</NavLinks>
						<Resume
							to="/"
							smooth={true}
							duration={500}
							spy={true}
							exact="true"
							offset={-80}
						>
							Resume
						</Resume>
					</NavLinksWrapper>
				</NavContainer>
			</NavWrap>
		</>
	);
};

export default Navbar;
