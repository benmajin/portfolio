import React, { forwardRef } from "react"

// eslint-disable-next-line react/display-name
const Projects = forwardRef<HTMLDivElement, unknown>((props, ref) => (
	<div className="min-h-screen" id="portfolio" ref={ref}>
		Projects
	</div>
))

export default Projects
