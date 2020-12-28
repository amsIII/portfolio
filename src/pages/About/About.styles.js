import styled from "styled-components";

export const AboutContainer = styled.div`
	display: grid;
	grid-template-columns: 53% 1fr;
	grid-template-rows: repeat(2, 1fr);
	margin-top: 60px;
	padding: 0 100px;
	color: #f3f3f3;
	height: 650px;
	font-family: "Roboto", sans-serif;
	${"" /* font-family: "Roboto Mono", monospace; */}
`;

export const ImgWrap = styled.div`
	max-width: 350px;
	height: 100%;
	justify-self: end;
`;
export const Img = styled.img`
	width: 100%;
	border-radius: 50%;
	transform: rotate(30deg);
`;

export const GreetingIntro = styled.p`
	font-size: 24px;
	font-weight: 500;
	justify-self: start;
	align-self: center;
	margin-left: 10px;
`;

export const GreetingSpan = styled.span`
	font-weight: 600;
`;

export const GreetingTitle = styled.p`
	font-size: 16px;
	font-weight: 400;
	text-align: right;
`;

export const GreetingContainer = styled.div`
	height: 100%;
	width: 45%;
	grid-area: 2 / span 2;
	justify-self: center;
	margin-top: 10px;
`;

export const GreetingP = styled.p`
	font-size: 18px;
	font-weight: 400;
`;
