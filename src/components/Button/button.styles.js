import { Link } from "react-router-dom";
import styled from "styled-components";

export const Btn = styled(Link)`
	box-sizing: content-box;
	height: 54px;
	width: 100%;
	max-width: 100px;
	padding: 8px;
	font-size: 0.8rem;
	font-weight: 900;
	color: #ff4655;
	text-transform: uppercase;
	text-decoration: none;
	box-shadow: 0 0 0 1px inset rgba(38, 38, 38, 0.8);
	position: relative;

	&::before,
	&::after {
		content: "";
		width: 1px;
		height: 8px;
		background: #f5f5f5;
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
		color: #f5f5f5;

		& p > span:first-of-type {
			width: 110%;
		}
		& p > span:last-of-type:after {
			background: #f5f5f5;
		}
	}
`;

export const BtnP = styled.p`
	margin: 0;
	height: 54px;
	line-height: 54px;
	box-sizing: border-box;
	z-index: 1;
	left: 0;
	width: 100%;
	position: relative;
	overflow: hidden;
`;

export const Bg = styled.span`
	width: 0;
	height: 100%;
	left: -5%;
	position: absolute;
	background: #ff4655;
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
	border: 1px solid #ff4655;
	&::before {
		content: "";
		width: 3px;
		height: 3px;
		left: -1px;
		top: -1px;
		background: #f5f5f5;
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
	text-align: center;
	&:after {
		content: "";
		width: 4px;
		height: 4px;
		right: 0;
		bottom: 0;
		background: #262626;
		position: absolute;
		transition: 0.3s ease-out all;
		z-index: 5;
	}
`;
