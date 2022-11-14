import React from "react"
import NavLink from "./NavLink"

const MobileMenu = () => (
	<ul className="absolute -bottom-14 right-0 flex w-full items-end justify-between bg-darkBlue py-4 px-4">
		<NavLink>Accueil</NavLink>
		<NavLink>Portfolio</NavLink>
		<NavLink>Contact</NavLink>
	</ul>
)

export default MobileMenu
