import React from "react"
import SectionContainer from "./Container"
import ProjectsCards from "./ProjectsCards"
import SectionTitle from "./SectionTitle"
import Separator from "./Separator"

const Projects = () => (
	<section className="bg-darkBlueLight">
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
