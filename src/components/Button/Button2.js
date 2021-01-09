import React, { useState, useEffect } from "react";
// import { Btn, BtnP, Bg, Base, Text } from "./button.styles";

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Btn = styled(Link)`
	box-sizing: content-box;
	${"" /* height: 54px; */}
	width: 100%;
	max-width: 100px;
	padding: 8px;
	font-size: 0.8rem;
	font-weight: 900;
	/* color: #2783b3; */
	text-transform: uppercase;
	text-decoration: none;
	box-shadow: ${({ scrollNav }) =>
		scrollNav
			? "0 0 0 1px inset rgba(245, 245, 245, 0.8)"
			: "0 0 0 1px inset rgba(38, 38, 38, 0.8)"};
	position: relative;
	color: ${({ scrollNav }) => (scrollNav ? "#f5f5f5" : "#262626")};

	&::before,
	&::after {
		content: "";
		width: 1px;
		height: 8px;
		background: ${({ scrollNav }) => (scrollNav ? "#262626" : "#f5f5f5")};
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
	}
	&::before {
		right: 0;
		left: initial;
	}

	&:hover {
		color: ${({ scrollNav }) => (scrollNav ? "#262626" : "#f5f5f5")};

		& p > span:first-of-type {
			width: 110%;
		}
		& p > span:last-of-type:after {
			background: ${({ scrollNav }) => (scrollNav ? "#262626" : "#f5f5f5")};
		}
	}
`;

export const BtnP = styled.p`
	margin: 0;
	height: 30px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	z-index: 1;
	left: 0;
	background-color: ${({ scrollNav }) => (scrollNav ? "#262626" : "#f5f5f5")};
	position: relative;
	overflow: hidden;
`;

export const Bg = styled.span`
	width: 0;
	height: 100%;
	left: -5%;
	position: absolute;
	background: #2783b3;
	width: 0;
	height: 100%;
	z-index: 3;
	transition: 0.3s ease-out all;
	transform: skewX(-10deg);
`;

export const Base = styled.span`
	box-sizing: border-box;
	position: absolute;
	z-index: 2;
	width: 100%;
	height: 100%;
	left: 0;
	border: 1px solid #2783b3;
	&::before {
		content: "";
		width: 3px;
		height: 3px;
		left: -1px;
		top: -1px;
		background: ${({ scrollNav }) => (scrollNav ? "#262626" : "#f5f5f5")};
		position: absolute;
		transition: 0.3s ease-out all;
	}
`;

export const Text = styled.span`
	z-index: 4;
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	/* color: ${({ scrollNav }) => (scrollNav ? "#f5f5f5" : "#262626")}; */
	&:after {
		content: "";
		width: 4px;
		height: 4px;
		right: 0;
		bottom: 0;
		background: ${({ scrollNav }) => (scrollNav ? "#f5f5f5" : "#262626")};
		position: absolute;
		transition: 0.3s ease-out all;
		z-index: 5;
	}
`;

const Btn2 = ({ btnText1, btnText2 }) => {
	const [isShown, setIsShown] = useState(false);

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

	return (
		<Btn
			scrollNav={scrollNav}
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
		>
			<BtnP scrollNav={scrollNav}>
				<Bg scrollNav={scrollNav}></Bg>
				<Base scrollNav={scrollNav}></Base>
				{isShown ? (
					<Text scrollNav={scrollNav}>{btnText2}</Text>
				) : (
					<Text scrollNav={scrollNav}>{btnText1}</Text>
				)}
			</BtnP>
		</Btn>
	);
};

export default Btn2;
