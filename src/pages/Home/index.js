import React, { useState } from "react";
import { aboutDataObj } from "../Data";
import About from "../About";
import Projects from "../Projects";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<About {...aboutDataObj} />
			<Projects />
		</div>
	);
};

export default Home;
