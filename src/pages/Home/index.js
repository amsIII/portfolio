import React, { useState } from "react";
import { aboutDataObj } from "../Data";
import About from "../About";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<About {...aboutDataObj} />
		</div>
	);
};

export default Home;
