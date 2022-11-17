import React from "react"

const AboutMeInfo = ({ label, value }: { label: string; value: string }) => (
	<div className="">
		<div className="font-bold text-mainRed">{label}</div>
		<div className="text-mainWhite/90">{value}</div>
	</div>
)

export default AboutMeInfo
