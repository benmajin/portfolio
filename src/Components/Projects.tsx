import React from "react"
import SectionContainer from "./ui/Container"
import ProjectsCards from "./ProjectsCards"
import SectionTitle from "./ui/SectionTitle"
import Separator from "./ui/Separator"

const Projects = () => (
	<section className="bg-darkBlueLight" id="projets">
		<SectionContainer>
			<div className="flex flex-col items-center space-y-8 text-center">
				<SectionTitle>Projets</SectionTitle>
				<Separator />
			</div>
			<ProjectsCards />
		</SectionContainer>
	</section>
)

export default Projects
