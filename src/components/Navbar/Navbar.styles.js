import styled from "styled-components";
import { NavLink as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const NavWrap = styled.nav`
	width: 100%;
	background: ${({ scrollNav }) =>
		scrollNav ? "rgba(38, 38, 38)" : "transparent"};
	position: fixed;
	top: 0;
	right: 0;
	z-index: 10;
	display: grid;
	place-items: center;
	transition: 0.15s all ease-in-out;
`;

export const NavContainer = styled.div`
	width: 100%;
	height: 80px;
	padding: 0 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: 0.12s all ease-in-out;
`;

export const LogoContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 300px;

	/* & span {
		color: ${({ scrollNav }) => (scrollNav ? "#262626" : "#f5f5f5")};

		&::hover {
			color: ${({ scrollNav }) => (scrollNav ? "#f5f5f5" : "#262626")};
		}
	} */
`;
export const Logo = styled.h1`
	font-size: 24px;
	font-weight: 900;
	color: #2783b3;
	letter-spacing: 1px;
	cursor: pointer;
	@media screen and (max-width: 1280px) {
		font-size: 20px;
	}
`;

export const NavLinksWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const Home = styled(LinkR)`
	font-size: 24px;
	font-weight: 700;
	${"" /* color: #2783b3; */}

	@media screen and (max-width: 1280px) {
		font-size: 20px;
	}
`;

export const NavLinks = styled(LinkS)`
	font-size: 20px;
	font-weight: 600;
	color: ${({ scrollNav }) => (scrollNav ? "#f5f5f5" : "#262626")};
	letter-spacing: 1px;
	cursor: pointer;
	height: 100%;
	transition: 0.1s all ease-in-out;

	&:not(:first-child) {
		margin-left: 10px;
	}

	&:hover {
		color: #2783b3;
		transition: 0.1s all ease-in-out;
	}

	&.active {
		color: #2783b3;
		margin-top: 2px;
		border-bottom: 2px solid #2783b3;
		transition: 0.1s all ease-in-out;
	}

	@media screen and (max-width: 1280px) {
		font-size: 18px;
	}
`;

export const Resume = styled.a`
	justify-self: start;
	font-size: 20px;
	font-weight: 600;
	color: #2783b3;
	cursor: pointer;
	margin-left: 10px;

	@media screen and (max-width: 1280px) {
		font-size: 18px;
	}
`;
