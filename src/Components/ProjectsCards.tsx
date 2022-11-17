import React from "react"
import ProjectCard from "./ui/ProjectCard"
import { projects } from "../utils/projects"

const ProjectsCards = () => (
	<div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-4">
		{projects.map((project) => (
			<ProjectCard
				image={project.image}
				desc={project.desc}
				title={project.title}
				key={project.id}
				githubLink={project.githubLink}
				projectLink={project.projectLink}
			/>
		))}
	</div>
)

export default ProjectsCards
