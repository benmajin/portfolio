import React from "react"
import SkillCard from "./ui/SkillCard"
import { skills } from "../utils/skills"

const SkillCards = () => (
	<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
		{skills.map((skill) => (
			<SkillCard
				desc={skill.desc}
				icon={skill.icon}
				title={skill.title}
				key={skill.id}
			/>
		))}
	</div>
)

export default SkillCards
