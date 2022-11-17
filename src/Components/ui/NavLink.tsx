import React, { ReactNode } from "react"

const NavLink = ({ children }: { children: ReactNode }) => (
	<li className="relative cursor-pointer text-xl font-bold">
		<span className="border-spacing-y-4 transform border-b-4 border-mainRed/0 transition-all duration-300 hover:border-mainRed/100">
			{children}
		</span>
	</li>
)

export default NavLink
