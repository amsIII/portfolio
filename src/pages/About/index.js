import React from "react";
import {
	GreetContainer,
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
			<GreetContainer id={id}>
				<ImgWrap>
					<Img src={img} alt={alt} />
				</ImgWrap>
				<GreetingIntro>
					{greeting} <GreetingSpan>Angel!</GreetingSpan>
					<GreetingTitle>{title}</GreetingTitle>
				</GreetingIntro>
				<GreetingContainer>
					<GreetingP>
						Keep scrolling and you'll find the About section outlining my Web
						Dev journey and how I got here, my projects, and most recent blogs.
						Looking to pass along an opportunity? My resume can be found in the
						top-right corner. However, using a resume to guage my employability
						is kind of, well, old-fashioned. Send me an email, let's chat and
						get to know each other!
					</GreetingP>
				</GreetingContainer>
			</GreetContainer>
		</>
	);
};

export default Greeting;
