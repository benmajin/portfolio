/* eslint-disable react/display-name */
import React from "react"
import LinkdinIcon from "../Assets/images/linkdinicon.png"
import githubIcon from "../Assets/images/githubIcon.png"
import Image from "next/image"
import Link from "next/link"
import Typewriter from "typewriter-effect"
import MainButton from "./MainButton"

const Header = () => (
	<header className="flex min-h-[calc(100vh_-_111px)] flex-col items-center justify-between bg-darkBlueLight py-10">
		<div className="flex space-x-6">
			<Link href="#">
				<Image src={LinkdinIcon.src} height={80} width={80} alt="linkdin logo" />
			</Link>
			<Link href="#">
				<Image src={githubIcon.src} height={80} width={80} alt="github logo" />
			</Link>
		</div>
		<div className="space-y-4">
			<h1 className="text-center text-7xl font-bold text-mainWhite">
				Benjamin Voissiere
			</h1>
			<div className="text-center text-4xl font-semibold tracking-wide text-mainRed">
				<Typewriter
					options={{
						strings: ["Développeur Web", "Front end", "ReactJS", "NextJS"],
						autoStart: true,
						loop: true,
						cursorClassName: "text-mainWhite",
					}}
				/>
			</div>
		</div>
		<MainButton />
	</header>
)

export default Header
