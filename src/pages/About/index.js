import React from "react";
import {
	AboutSection,
	ImgContainer,
	Img,
	AboutContainer,
	TextContainer,
	Greeting,
	Title,
	Location,
	AboutText,
} from "./About.styles";
import ValBtn from "../../components/Button";

const AboutPage = ({ id, greeting, title, img, alt }) => {
	return (
		<>
			<AboutSection id={id}>
				<ImgContainer>
					<Img src={img} alt={alt} />
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
							working on an Ecommerce website to assist small business with the
							addition or transition from Brick and Mortar to Ecommerce.
						</AboutText>
					</TextContainer>
					<ValBtn btnText={"Push"} />
				</AboutContainer>
			</AboutSection>
		</>
	);
};

export default AboutPage;
