import styled from "styled-components";

export const FooterWrapper = styled.footer`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0 100px;
	@media screen and (max-width: 768px) {
		padding: 0;
	}
`;
export const FooterContainer = styled.div`
	width: 110px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const SocialIconLink = styled.a`
	color: #709fb0;
	font-size: 24px;
`;
