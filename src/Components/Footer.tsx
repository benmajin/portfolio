import React from "react"

const Footer = () => (
	<footer className="bg-darkBlue">
		<div className="mx-auto flex flex-col items-center justify-between p-4 text-mainWhite md:flex-row md:p-8 lg:max-w-screen-xl">
			<ul className="flex justify-around space-x-6 self-center py-6 text-center sm:space-y-0 sm:space-x-4 lg:flex-1 lg:justify-start">
				<li>Accueil</li>
				<li>Portfolio</li>
				<li>Contact</li>
			</ul>
			<div className="flex flex-col justify-center  lg:pt-0">
				<div className="flex  justify-center space-x-4 ">
					<a
						rel="noopener noreferrer"
						href="#"
						title="Instagram"
						className="flex h-8 w-8 transform items-center justify-center rounded-full ring-mainRed/30 transition-all duration-200 hover:ring-4 dark:bg-violet-400 dark:text-gray-900 sm:h-10 sm:w-10">
						<svg
							fill="#000000"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24px"
							height="24px">
							<path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
						</svg>
					</a>
					<a
						rel="noopener noreferrer"
						href="#"
						title="Pinterest"
						className="flex h-8 w-8 transform items-center justify-center rounded-full ring-mainRed/30 transition-all duration-200 hover:ring-4 dark:bg-violet-400 dark:text-gray-900 sm:h-10 sm:w-10">
						<svg
							fill="#000000"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 50 50"
							width="24px"
							height="24px">
							<path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z" />
						</svg>
					</a>
				</div>
			</div>
		</div>
		<div className="py-6 text-center text-sm text-mainWhite/60">
			© 2022 Benjamin Voissiere. All rights reserved.
		</div>
	</footer>
)

export default Footer
