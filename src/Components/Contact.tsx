import React from "react"
import SectionContainer from "./Container"
import SectionText from "./SectionText"
import SectionTitle from "./SectionTitle"
import Separator from "./Separator"

const Contact = () => (
	<section className="bg-darkBlueLight">
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
			<form className="w-full max-w-screen-sm">
				<div className="mb-4 w-full">
					<label
						htmlFor="name"
						className="mb-2 block text-sm font-medium text-mainWhite">
						Votre nom et prénom
					</label>
					<input
						type="text"
						id="name"
						className="block w-full rounded-lg border border-darkBlue bg-green-50 p-2.5 text-sm text-darkBlue placeholder-darkBlueLight/70 focus:border-green-500 "
						placeholder="Antoine Dupont"
					/>
				</div>
				<div className="mb-4 w-full">
					<label
						htmlFor="email"
						className="mb-2 block text-sm font-medium text-mainWhite">
						Votre email
					</label>
					<input
						type="email"
						id="email"
						className="block w-full rounded-lg border border-darkBlue bg-green-50 p-2.5 text-sm text-darkBlue placeholder-darkBlueLight/70 focus:border-green-500 "
						placeholder="johndoe@gmail.com"
					/>
				</div>
				<div className="mb-4 w-1/2">
					<label
						htmlFor="object"
						className="mb-2 block text-sm font-medium text-mainWhite">
						Objet
					</label>
					<input
						type="text"
						id="object"
						className="block w-full rounded-lg border border-darkBlue bg-green-50 p-2.5 text-sm text-darkBlue placeholder-darkBlueLight/70 focus:border-green-500 "
						placeholder="Objet..."
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="message"
						className="mb-2 block text-sm font-medium text-mainWhite">
						Message
					</label>
					<textarea
						id="message"
						className="block w-full rounded-lg border border-darkBlue bg-green-50 p-2.5 text-sm text-darkBlue placeholder-darkBlueLight/70 focus:border-green-500 "
						placeholder=""
					/>
				</div>
			</form>
		</SectionContainer>
	</section>
)

export default Contact
