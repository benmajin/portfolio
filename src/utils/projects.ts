import TodoImage from "../Assets/images/ProjectsImages/TodoImage.png"
import ProductPageImage from "../Assets/images/ProjectsImages/ProductPageImage.png"
import QuizzAppImage from "../Assets/images/ProjectsImages/QuizzApp.png"
import Image4Saisons from "../Assets/images/ProjectsImages/4saisons.png"

export const projects = [
	{
		id: 1,
		title: "Aux 4 Saisons",
		desc:
			"Site vitrine pour magasin de vente de fruits et légumes. Intégration du plugin Facebook Messenger au site pour prise de contact simplifiée",
		projectLink: "https://aux-4-saisons.vercel.app/",
		githubLink: undefined,
		image: Image4Saisons.src,
	},
	{
		id: 2,
		title: "Holly Quizz",
		desc:
			"Site de quizz sur les célébirtés, les films, les séries TV, la musique ou tout ce qui touche à Hollywood. Next JS / Prisma / Tailwind / PlanetScale",
		projectLink: "https://celeb-quizz.vercel.app",
		githubLink: undefined,
		image: QuizzAppImage.src,
	},
	{
		id: 3,
		title: "Todo App",
		desc:
			'Petite todo liste application. Dark Mode. Possibilité de trier les choses à faire en fonction de leur état. Ajout et suppression de "todo". Vanilla JS',
		projectLink: "https://brilliant-lamington-5b4864.netlify.app/",
		githubLink: "https://github.com/benmajin/todo-app",
		image: TodoImage.src,
	},
	{
		id: 4,
		title: "Single Product Page",
		desc:
			"Page d'un produit. Possibilité d'ajouter le produit au panier, caroussel d'images. Page responsive . Réalisé en React avec ViteJS",
		projectLink: "https://meek-croissant-1a0fcb.netlify.app/",
		githubLink: "https://github.com/benmajin/product-page",
		image: ProductPageImage.src,
	},
]
