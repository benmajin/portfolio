import React from "react"
import SectionContainer from "./Container"
import SectionText from "./SectionText"
import SectionTitle from "./SectionTitle"
import Separator from "./Separator"
import SkillCards from "./SkillCards"

const Skills = () => (
	<section className="bg-darkBlue">
		<SectionContainer>
			<div className="flex flex-col items-center space-y-8 text-center">
				<SectionTitle>Compétences</SectionTitle>
				<SectionText>
					Création d'applications pour des sites web, création de sites internet,
					utilisations des langages front-end (HTML, CSS, Javascript) pour ce que
					l’utilisateur final va voir, et des langages back-end (PHP) pour ce que
					l’utilisateur ne voit pas ou pour ce qui permet de dynamiser le front-end
					(comme l’envoi d’email, gestion de panier ou paiement sur un site
					e-commerce etc.). Corrections d'éventuels bugs sur des sites internet déja
					en ligne.
				</SectionText>
				<Separator />
			</div>
			<SkillCards />
		</SectionContainer>
	</section>
)

export default Skills
