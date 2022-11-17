import React, { ReactNode } from "react"

const SectionContainer = ({ children }: { children: ReactNode }) => (
	<div className="mx-auto flex min-h-screen flex-col items-center justify-around space-y-4 py-4 px-4 lg:max-w-screen-xl">
		{children}
	</div>
)

export default SectionContainer
