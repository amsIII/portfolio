import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/home.page";
import About from "./pages/about/about.page";
import SinglePost from "./components/singlepost/singlepost.component";
import Posts from "./pages/posts/posts.page";
import Projects from "./pages/projects/projects.page";
import Resume from "./pages/resume/resume.page";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route component={Home} path="/" exact />
				<Route component={About} path="/about" exact />
				<Route component={SinglePost} path="/post/:slug" exact />
				<Route component={Posts} path="/posts" exact />
				<Route component={Projects} path="/projects" exact />
				<Route component={Resume} path="/resume" exact />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
