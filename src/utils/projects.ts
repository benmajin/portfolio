import TodoImage from "../Assets/images/ProjectsImages/TodoImage.png"
import ProductPageImage from "../Assets/images/ProjectsImages/ProductPageImage.png"
import QuizzAppImage from "../Assets/images/ProjectsImages/QuizzApp.png"

export const projects = [
	{
		id: 1,
		title: "Holly Quizz",
		desc:
			"Site de quizz sur les célébirtés, les films, les séries TV, la musique ou tout ce qui touche à Hollywood. Next JS / Prisma / Tailwaind / PlanetScale",
		projectLink: "https://celeb-quizz.vercel.app",
		githubLink: undefined,
		image: QuizzAppImage.src,
	},
	{
		id: 2,
		title: "Todo App",
		desc:
			'Petite todo liste application. Dark Mode. Possibilité de trier les choses à faire en fonction de leur état. Ajout et suppression de "todo". Vanilla JS',
		projectLink: "https://brilliant-lamington-5b4864.netlify.app/",
		githubLink: "https://github.com/benmajin/todo-app",
		image: TodoImage.src,
	},
	{
		id: 3,
		title: "Single Product Page",
		desc:
			"Page d'un produit. Possibilité d'ajouter le produit au panier, caroussel d'images. Page responsive . Réalisé en React avec ViteJS",
		projectLink: "https://meek-croissant-1a0fcb.netlify.app/",
		githubLink: "https://github.com/benmajin/product-page",
		image: ProductPageImage.src,
	},
	// {
	// 	id: 4,
	// 	title: "Aux 4 Saisons",
	// 	desc:
	// 		"Site de type e-commerce. Tous les éléments d'un site e-commerce sont représentés. Réalisé entièrement avec HTLM / CSS - PHP et JavaScript",
	// 	projectLink: undefined,
	// 	githubLink: "",
	// 	image: Image4Saisons.src,
	// },
]
