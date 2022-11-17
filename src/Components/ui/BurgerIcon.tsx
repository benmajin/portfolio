import React from "react"
import clsx from "clsx"

const BurgerIcon = ({
	isOpen,
	handleOpenMenu,
}: {
	isOpen: boolean
	handleOpenMenu: () => void
}) => (
	<button
		className="group relative focus:outline-none sm:hidden"
		onClick={handleOpenMenu}>
		<div
			className={clsx(
				"relative flex h-12 w-12 transform items-center justify-center overflow-hidden rounded-full bg-darkBlueLight shadow-md ring-0 ring-mainRed/30 transition-all duration-200 hover:ring-4 group-focus:ring-4",
				isOpen && "ring-4 ring-mainRed/30"
			)}>
			<div className="flex h-5 w-5 origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
				<div
					className={clsx(
						"h-0.5 w-7 origin-left transform bg-mainWhite transition-all duration-300",
						isOpen && "translate-x-10"
					)}
				/>
				<div
					className={clsx(
						"h-0.5 w-7 transform rounded bg-mainWhite transition-all delay-75 duration-300",
						isOpen && "translate-x-10"
					)}
				/>
				<div
					className={clsx(
						"h-0.5 w-7 origin-left transform bg-mainWhite transition-all duration-300",
						isOpen && "translate-x-10"
					)}
				/>

				<div
					className={clsx(
						"absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 group-focus:w-12 ",
						isOpen && "translate-x-0"
					)}>
					<div
						className={clsx(
							"absolute h-0.5 w-5 rotate-0 transform bg-mainWhite transition-all delay-300 duration-500",
							isOpen && "rotate-45"
						)}
					/>
					<div
						className={clsx(
							"absolute h-0.5 w-5 -rotate-0 transform bg-mainWhite transition-all delay-300 duration-500",
							isOpen && "-rotate-45"
						)}
					/>
				</div>
			</div>
		</div>
	</button>
)

export default BurgerIcon
