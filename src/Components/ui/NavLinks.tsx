import React, { ReactNode } from "react"

const NavLinks = ({ children }: { children: ReactNode }) => (
	<ul className="hidden space-x-8 sm:flex">{children}</ul>
)

export default NavLinks
