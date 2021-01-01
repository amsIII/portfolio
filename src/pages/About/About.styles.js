import styled from "styled-components";

export const AboutSection = styled.div`
	height: 100vh;
	width: 100vw;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	grid-gap: 25px;
	${"" /* background: #333; */}
	font-family: "Roboto", sans-serif;
`;

export const ImgContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;
export const Img = styled.img`
	width: 85%;
	padding: 7px;
	border: 10px solid #262626;
`;

export const AboutContainer = styled.div`
	width: 100%;
	height: 55%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	margin: auto 0;
`;

export const TextContainer = styled.div``;

export const Greeting = styled.div`
	font-size: 60px;
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
`;
