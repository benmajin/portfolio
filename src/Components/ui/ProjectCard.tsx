import Image from "next/image"
import React from "react"
import ButtonProjects from "./ButtonProjects"

type TProject = {
	image: string
	title: string
	desc: string
	projectLink: string | undefined
	githubLink: string
}

const ProjectCard = ({
	image,
	title,
	desc,
	projectLink,
	githubLink,
}: TProject) => (
	<div className="group relative overflow-hidden">
		<Image src={image} width={300} height={400} alt="project image" />
		<div className="absolute bottom-0  w-full transform overflow-hidden bg-black/90 text-mainWhite transition-all delay-500 duration-500 md:translate-y-2/3 md:bg-black/50 md:group-hover:-translate-y-0 md:group-hover:bg-black/90">
			<div className="max-w-fit py-6">
				<span className="pl-4 text-2xl font-bold">{title}</span>
				<div className="h-1 w-0 transform bg-mainRed delay-75 duration-500 md:group-hover:w-full" />
			</div>
			<div className="px-4 transition-all delay-1000 duration-300 md:opacity-0 md:group-hover:opacity-100">
				<p className=" ">{desc}</p>
				<div className="flex space-x-3 py-4">
					<ButtonProjects destination={githubLink} label="Github" />
					{projectLink && <ButtonProjects destination={projectLink} label="Site" />}
				</div>
			</div>
		</div>
	</div>
)

export default ProjectCard
