import Image from "next/image"
import React, { useEffect, useState } from "react"
import LogoSmall from "../Assets/images/logo_small.png"
import BurgerIcon from "./BurgerIcon"
import MobileMenu from "./MobileMenu"
import NavLink from "./NavLink"
import NavLinks from "./NavLinks"
import { useWindowSize } from "usehooks-ts"

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { width } = useWindowSize()

	useEffect(() => {
		if (width >= 640) setIsOpen(false)
	}, [width])

	return (
		<nav className="relative bg-darkBlue text-mainWhite">
			<div className="mx-auto flex items-center justify-between px-4 py-6 lg:max-w-screen-xl">
				<Image src={LogoSmall} alt="logo" height={125} width={125} />

				<BurgerIcon
					isOpen={isOpen}
					handleOpenMenu={() => setIsOpen((prev) => !prev)}
				/>

				{isOpen && <MobileMenu />}

				<NavLinks>
					<NavLink>Accueil</NavLink>
					<NavLink>Portfolio</NavLink>
					<NavLink>Contact</NavLink>
				</NavLinks>
			</div>
		</nav>
	)
}

export default NavBar
