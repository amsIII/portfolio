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
	height: 60px;
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
`;
export const Logo = styled.h1`
	font-size: 24px;
	font-weight: 900;
	color: #2ab0bf;
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
	color: #2ab0bf;

	@media screen and (max-width: 1280px) {
		font-size: 20px;
	}
`;

export const NavLinks = styled(LinkS)`
	font-size: 20px;
	font-weight: 600;
	color: #f3f3f3;
	letter-spacing: 1px;
	cursor: pointer;
	height: 100%;
	transition: 0.1s all ease-in-out;

	&:not(:first-child) {
		margin-left: 10px;
	}

	&:hover {
		color: #d98f89;
		transition: 0.1s all ease-in-out;
	}

	&.active {
		color: #bfa41b;
		margin-top: 2px;
		border-bottom: 2px solid #bfa41b;
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
	color: #08a689;
	cursor: pointer;
	margin-left: 10px;

	@media screen and (max-width: 1280px) {
		font-size: 18px;
	}
`;
