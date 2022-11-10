import React from "react"
import NavLink from "./NavLink"

const MobileMenu = () => {
	return (
		<ul className="absolute -bottom-20 right-0 flex w-full flex-col items-end bg-darkBlue px-4">
			<NavLink>Accueil</NavLink>
			<NavLink>Accueil</NavLink>
			<NavLink>Accueil</NavLink>
		</ul>
	)
}

export default MobileMenu
