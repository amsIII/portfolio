import React from "react";
import {
	AboutContainer,
	ImgWrap,
	Img,
	GreetingContainer,
	GreetingIntro,
	GreetingSpan,
	GreetingTitle,
	GreetingP,
} from "./About.styles";

const Greeting = ({ id, greeting, title, img, alt }) => {
	return (
		<>
			{/* Greet WILL CONTAIN ABOUT AND PROJECTS, BLOG AND RESUME WILL REMAIN SEPARATE LNKS */}
			<AboutContainer id={id}>
				<ImgContainer>
					<Img src={img} alt={alt} />
				</ImgContainer>
				<InfoContainer>
					<TextContainer>
						<Greeting>Hi, My name is Angel!</Greeting>
						<Title>Front-End Web Developer</Title>
						<Locatiom>Philadelphia</Locatiom>
						<About>
							I'm an autodidact, freelance, Front-End Web Developer based out of
							Philadelphia. I assist local small businesses with landing pages,
							content editing and management, and maintainance. I'm currently
							working on an Ecommerce website to assist small business with the
							addition or transition from Brick and Mortar to Ecommerce.
						</About>
					</TextContainer>
					<BtnContainer>
						<Button>About</Button>
						<Button>Projects</Button>
						<Button>Blog</Button>
						<Button>Resume</Button>
					</BtnContainer>
				</InfoContainer>
			</AboutContainer>
		</>
	);
};

export default Greeting;
