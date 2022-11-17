import Link from "next/link"
import React from "react"

type TLink = {
	destination: string
	label: string
}

const ButtonProjects = ({ destination, label }: TLink) => (
	<Link
		href={destination}
		className="whitespace-no-wrap flex items-center justify-center rounded-full border-2 border-transparent bg-mainRed px-4 py-1 text-base font-medium leading-6 text-mainWhite shadow-sm hover:border-mainRed hover:bg-transparent hover:text-white focus:outline-none">
		{label}
	</Link>
)

export default ButtonProjects
