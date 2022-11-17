import Image from "next/image"
import React from "react"

type TSkillCard = {
	icon: string
	title: string
	desc: string
}

const SkillCard = ({ icon, title, desc }: TSkillCard) => (
	<div className="flex flex-col space-y-6 rounded-2xl border-l-2 border-mainRed bg-darkBlueLight p-6 ">
		<Image src={icon} height="80" width={80} alt="icon" />
		<h2 className="text-2xl font-bold text-mainWhite">{title}</h2>
		<p className="text-md text-mainWhite/80">{desc}</p>
	</div>
)

export default SkillCard
