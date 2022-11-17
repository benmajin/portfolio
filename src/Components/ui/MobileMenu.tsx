import React from "react"
import NavLink from "./NavLink"

const MobileMenu = () => (
	<ul className="absolute -bottom-14 right-0 flex w-full items-end justify-between bg-darkBlue py-4 px-4">
		<a href="/">
			<NavLink>Accueil</NavLink>
		</a>

		<a href="#projects">
			<NavLink>Projets</NavLink>
		</a>
		<a href="#contact">
			<NavLink>Contact</NavLink>
		</a>
	</ul>
)

export default MobileMenu
