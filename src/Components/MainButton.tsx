import React from "react"

// eslint-disable-next-line react/display-name
const MainButton = () => (
	<button className="group relative inline-block items-center justify-start overflow-hidden rounded-full px-5 py-3 text-xl font-bold">
		<span className="absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-mainRed opacity-0"></span>
		<span className="absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-mainRed opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8 group-focus:-translate-x-8"></span>
		<span className="relative w-full text-left text-mainWhite transition-colors duration-200 ease-in-out ">
			Projets
		</span>
		<span className="absolute inset-0 rounded-full border-2 border-mainRed"></span>
	</button>
)

export default MainButton
