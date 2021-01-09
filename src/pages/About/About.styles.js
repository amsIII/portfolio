import styled from "styled-components";

export const AboutSection = styled.div`
	height: 100vh;
	width: 100vw;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	grid-gap: 25px;
	font-family: "Roboto", sans-serif;
	padding: 0 125px;
`;

export const ImgContainer = styled.div`
	width: 100%;
	max-width: 555px;
	height: 50%;
	align-self: center;
	justify-self: end;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: content-box;
	padding: 10px;
	color: #2783b3;
	box-shadow: 0 0 0 1px inset #262626;
	position: relative;

	&::before,
	&::after {
		content: "";
		width: 4px;
		height: 15px;
		background: #f5f5f5;
		position: absolute;
		left: -0.2%;
		top: 50%;
		transform: translateY(-50%);
	}
	&::before {
		right: -0.2%;
		left: initial;
	}
	&:hover {
		& div > span:first-of-type {
			width: 120%;
		}
		& div > div a {
			opacity: 1;
			transition: all 0.3s 0.2s ease-in-out;
		}

		& div:after {
			background: #f5f5f5;
		}
	}
`;

export const ImgWrap = styled.div`
	margin: 0;
	padding: 9px;
	box-sizing: border-box;
	z-index: 1;
	left: 0;
	width: 100%;
	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	&:after {
		content: "";
		width: 10px;
		height: 10px;
		right: -2px;
		bottom: -2px;
		background: #262626;
		position: absolute;
		transition: 0.5s ease-in-out all;
		z-index: 1005;
	}
`;

export const Bg = styled.span`
	width: 0;
	height: 100%;
	left: -10%;
	position: absolute;
	background: rgba(39, 131, 179, 0.98);
	width: 0;
	height: 100%;
	z-index: 3;
	transition: 0.3s ease-in-out all;
	transform: skewX(-10deg);
`;

export const Base = styled.span`
	box-sizing: border-box;
	position: absolute;
	z-index: 2;
	width: 100%;
	height: 100%;
	left: 0;
	border: 2px solid #2783b3;
	&:before {
		content: "";
		width: 10px;
		height: 10px;
		left: -3px;
		top: -3px;
		background: #f5f5f5;
		position: absolute;
		transition: 0.3s ease-in-out all;
	}
`;

export const Img = styled.img`
	width: 100%;
	max-width: 555px;
`;

export const AboutContainer = styled.div`
	width: 100%;
	max-width: 555px;
	height: 45%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	margin: auto 0;
`;

export const TextContainer = styled.div`
	width: 100%;
	max-width: 555px;
`;

export const Greeting = styled.div`
	font-size: 52px;
	font-family: "Ubuntu Mono", monospace;
	margin-bottom: 10px;
`;
export const Title = styled.div`
	font-size: 24px;
	font-weight: 600;
`;
export const Location = styled.div`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 20px;
`;
export const AboutText = styled.div`
	font-size: 24px;
	font-weight: 400;
	text-align: justify;
`;

export const SocialLinks = styled.div`
	width: 150px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	left: 37%;
	top: 48%;
	z-index: 6;
`;

export const SocialLinkIcon = styled.a`
	color: #f5f5f5;
	font-size: 30px;
	opacity: 0;
	transition: 0.1s ease-in-out all;
	&:visited {
		color: #f5f5f5;
	}
`;
export const ContactBtn = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top: 15px;
`;

export const ContactBtnLink = styled.a`
	cursor: pointer;
	font-size: 20px;
	font-weight: 600;
	background-color: #2783b3;
	padding: 10px;
	border-radius: 5px;
	color: #f5f5f5;

	&:hover {
		transform: scale(1.1, 1.1);
	}
`;
