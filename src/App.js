import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import SinglePost from "./components/singlepost/singlepost.component";
import Blog from "./pages/Blog";
import Resume from "./pages/resume/resume.page";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<BrowserRouter>
			<Navbar toogle={toggle} />
			<Switch>
				<Route component={Home} path="/" exact />
				<Route component={SinglePost} path="/post/:slug" exact />
				<Route component={Blog} path="/blog" exact />
				<Route component={Resume} path="/resume" exact />
			</Switch>
			{/* <Footer /> */}
		</BrowserRouter>
	);
}

export default App;
