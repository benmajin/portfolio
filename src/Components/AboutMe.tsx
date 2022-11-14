import React from "react"
import SectionTitle from "./SectionTitle"

const AboutMe = () => (
	<section className=" bg-darkBlue py-10">
		<div className="flex min-h-screen flex-col items-center justify-around px-4 lg:max-w-screen-xl">
			<div className="flex flex-col items-center space-y-8 text-center">
				<SectionTitle>A Propos</SectionTitle>
				<p className="text-mainWhite/90">
					Je m’appelle Benjamin Voissiere, je suis un développeur web full stack
					passionné. Ma spécialité, l'intégration des pages et le développement des
					différentes fonctionnalités. Sans oublier l'optimisation du référencement
					naturel et la mise en ligne. Je peux donc vous accompagner sur toutes les
					étapes de votre projet digital.
				</p>
				<div className="h-1.5 w-32 bg-mainRed" />
			</div>
			<div>test</div>
		</div>
	</section>
)

export default AboutMe
