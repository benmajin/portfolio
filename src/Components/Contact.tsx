import React from "react"
import ContactForm from "./ContactForm"
import SectionContainer from "./ui/Container"
import SectionText from "./ui/SectionText"
import SectionTitle from "./ui/SectionTitle"
import Separator from "./ui/Separator"

const Contact = () => (
	<section className="bg-darkBlueLight" id="contact">
		<SectionContainer>
			<div className="flex flex-col items-center space-y-8 text-center">
				<SectionTitle>Me contacter</SectionTitle>
				<SectionText>
					Vous avez besoin d'une prestation : la création ou la mise à jour d'un site
					web, une optimisation (de votre référencement ou des performances de votre
					site) ? N'hésitez pas à me contacter via ce formulaire de contact ou
					directement par téléphone au 06 25 27 76 61.
				</SectionText>
				<Separator />
			</div>
			<ContactForm />
		</SectionContainer>
	</section>
)

export default Contact
