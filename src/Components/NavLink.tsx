import React, { ReactNode } from "react"

const NavLink = ({ children }: { children: ReactNode }) => (
	<li className="text-xl font-bold">{children}</li>
)

export default NavLink
