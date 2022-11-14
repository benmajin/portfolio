import Image from "next/image"
import React from "react"
import SectionTitle from "./SectionTitle"
import Separator from "./Separator"
import reactImage from "../Assets/images/react.png"
import AboutMeInfo from "./AboutMeInfo"

const AboutMe = () => (
	<section className=" bg-darkBlue py-10">
		<div className="mx-auto flex min-h-screen flex-col items-center justify-around space-y-4 px-4 lg:max-w-screen-xl">
			<div className="flex flex-col items-center space-y-8 text-center">
				<SectionTitle>A Propos</SectionTitle>
				<p className="text-mainWhite/90">
					Je m’appelle Benjamin Voissiere, je suis un développeur web full stack
					passionné. Ma spécialité, l'intégration des pages et le développement des
					différentes fonctionnalités. Sans oublier l'optimisation du référencement
					naturel et la mise en ligne. Je peux donc vous accompagner sur toutes les
					étapes de votre projet digital.
				</p>
				<Separator />
			</div>
			<div className="flex flex-col justify-between space-y-8 sm:flex-row">
				<Image
					src={reactImage.src}
					alt="illustration react"
					layout="responsive"
					width={300}
					height={200}
					className="w-2/3 object-cover"
				/>
				<div className="flex flex-col items-center space-y-4 sm:w-4/5 sm:px-5">
					<p className="text-center text-mainWhite/90">
						Pour tous renseignements concernant la réalisation de vos projets je suis
						joignable aux coordonnées ci-dessous, ou alors via le formulaire de
						contact situé en bas de la page.
					</p>
					<Separator />
					<div className="grid w-full grid-cols-2 justify-items-center gap-5 py-4">
						<AboutMeInfo label="Nom :" value="Benjamin Voissiere" />
						<AboutMeInfo label="Téléphone :" value="06 25 27 76 61" />
						<AboutMeInfo label="Linkdin :" value="benjamin.voissiere" />
						<AboutMeInfo label="Github" value="benjamin" />
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default AboutMe
