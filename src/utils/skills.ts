import nextIcon from "../Assets/images/nextJS.png"
import reactIcon from "../Assets/images/reactIcon.png"
import monitoricon from "../Assets/images/monitor.png"
import responsiveRicon from "../Assets/images/responsive.png"

export const skills = [
	{
		id: 1,
		title: "Développement Web",
		desc:
			"Réaliser l’ensemble des fonctionnalités techniques d’un site ou d'une application web. Concevoir des sites sur mesure ou adapte des solutions techniques existantes en fonction du projet et de la demande du client.",
		icon: monitoricon.src,
	},
	{
		id: 2,
		title: "ReactJS",
		desc:
			"React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état.",
		icon: reactIcon.src,
	},
	{
		id: 3,
		title: "NextJS",
		desc:
			"Next.js est un framework gratuit et open source s'appuyant sur la bibliothèque JavaScript React et sur la technologie Node.js.",
		icon: nextIcon.src,
	},
	{
		id: 4,
		title: "Développement Responsive",
		desc:
			"Un site web réactif est un site web dont la conception vise, grâce à différents principes et techniques, à offrir une consultation confortable sur des écrans de tailles très différentes (mobile, TV, Tablette ect).",
		icon: responsiveRicon.src,
	},
]
