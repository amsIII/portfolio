import React, { useState } from "react";
import { aboutDataObj } from "../Data";
import About from "../About";
import Projects from "../Projects";
import "./Home.styles.scss";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="home">
			<About {...aboutDataObj} />
			<Projects />
		</div>
	);
};

export default Home;
