import React from "react";
import {
	AboutSection,
	ImgContainer,
	Wrapper,
	ImgWrap,
	SocialLinks,
	SocialLinkIcon,
	Bg,
	Base,
	Img,
	AboutContainer,
	TextContainer,
	Greeting,
	Title,
	Location,
	AboutText,
	ContactBtn,
	ContactBtnLink,
} from "./About.styles";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const AboutPage = ({ id, greeting, title, img, alt }) => {
	return (
		<>
			<AboutSection id="about">
				<ImgContainer>
					<Wrapper>
						<ImgWrap>
							<Bg></Bg>
							<Base></Base>
							<Img src={img} alt={alt} />
							<SocialLinks>
								<SocialLinkIcon
									href="/"
									target="_blank"
									aria-label="Linkedin"
									rel="noreferrer noopener"
								>
									<FaLinkedin />
								</SocialLinkIcon>
								<SocialLinkIcon
									target="_blank"
									aria-label="Instagram"
									href="https://www.instagram.com/KindOfADev/"
									rel="noreferrer noopener"
								>
									<FaInstagram />
								</SocialLinkIcon>
								<SocialLinkIcon
									target="_blank"
									aria-label="Twitter"
									href="//www.twitter.com/briandesignz"
									rel="noreferrer noopener"
								>
									<FaTwitter />
								</SocialLinkIcon>
								<SocialLinkIcon
									target="_blank"
									aria-label="Twitter"
									href="https://github.com/amsIII"
									rel="noreferrer noopener"
								>
									<FaTwitter />
								</SocialLinkIcon>
							</SocialLinks>
						</ImgWrap>
					</Wrapper>
				</ImgContainer>

				<AboutContainer>
					<TextContainer>
						<Greeting>Hi, My name is Angel!</Greeting>
						<Title>Front-End Web Developer</Title>
						<Location>Philadelphia</Location>
						<AboutText>
							I'm an autodidact, freelance, Front-End Web Developer based out of
							Philadelphia. I assist local small businesses with landing pages,
							content editing and management, and maintainance. I'm currently
							working on a website to assist small businesses with the addition
							and Ecommerce site, or transition from Brick and Mortar to
							Ecommerce, or both.
						</AboutText>
					</TextContainer>
					<ContactBtn>
						<ContactBtnLink href="#">Get in touch!</ContactBtnLink>
					</ContactBtn>
				</AboutContainer>
			</AboutSection>
		</>
	);
};

export default AboutPage;
