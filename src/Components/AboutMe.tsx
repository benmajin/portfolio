import React from "react"
import SectionTitle from "./SectionTitle"
import Separator from "./Separator"
import reactImage from "../Assets/images/react-1.png"
import AboutMeInfo from "./AboutMeInfo"
import SectionText from "./SectionText"
import SectionContainer from "./Container"

const AboutMe = () => (
	<section className=" bg-darkBlue py-10">
		<SectionContainer>
			<div className="flex flex-col items-center space-y-8 text-center">
				<SectionTitle>A Propos</SectionTitle>
				<SectionText>
					Je m’appelle Benjamin Voissiere, je suis un développeur web full stack
					passionné. Ma spécialité, l'intégration des pages et le développement des
					différentes fonctionnalités. Sans oublier l'optimisation du référencement
					naturel et la mise en ligne. Je peux donc vous accompagner sur toutes les
					étapes de votre projet digital.
				</SectionText>
				<Separator />
			</div>
			<div className="flex flex-col items-center justify-between space-y-8 md:flex-row">
				<div className="overflow-hidden rounded-2xl">
					<img
						src={reactImage.src}
						alt="illustration react"
						width={600}
						height={200}
						className=" w-full object-cover"
					/>
				</div>

				<div className="flex flex-col items-center space-y-4 sm:px-5 md:w-full lg:w-2/3 ">
					<SectionText>
						Pour tous renseignements concernant la réalisation de vos projets je suis
						joignable aux coordonnées ci-dessous, ou alors via le formulaire de
						contact situé en bas de la page.
					</SectionText>
					<Separator />
					<div className="grid w-full grid-cols-2 justify-items-center gap-5 py-4">
						<AboutMeInfo label="Nom :" value="Benjamin Voissiere" />
						<AboutMeInfo label="Téléphone :" value="06 25 27 76 61" />
						<AboutMeInfo label="Linkdin :" value="benjamin.voissiere" />
						<AboutMeInfo label="Github" value="benjamin" />
					</div>
				</div>
			</div>
		</SectionContainer>
	</section>
)

export default AboutMe
