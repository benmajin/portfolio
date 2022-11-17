import React from "react"
import MainLink from "../Components/ui/MainLink"

const PageNotFound = () => (
	<div className="flex h-screen w-screen items-center justify-center bg-darkBlue">
		<div className="rounded-md bg-darkBlueLight px-40 py-20 shadow-xl">
			<div className="flex flex-col items-center">
				<h1 className="text-9xl font-bold text-mainRed">404</h1>

				<h6 className="mb-2 text-center text-2xl font-bold text-mainWhite md:text-3xl">
					<span className="text-mainRed">Oops!</span> Page not found
				</h6>

				<p className="mb-8 text-center text-gray-500 md:text-lg">
					La page que vous avez demandé n'existe pas !
				</p>

				<MainLink destination="/" label="Retour à l'accueil" />
			</div>
		</div>
	</div>
)

export default PageNotFound
