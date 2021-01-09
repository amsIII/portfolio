import React from "react";
import Project from "../../components/project";
import { ProjectsWrap } from "./Projects.styles";

const Projects = () => {
	return (
		<>
			<ProjectsWrap id="projects">
				<Project />
				<Project />
				<Project />
				<Project />
			</ProjectsWrap>
		</>
	);
};

export default Projects;
