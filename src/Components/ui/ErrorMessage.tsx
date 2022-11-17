import React from "react"

const ErrorMessage = ({ message }: { message: string }) => (
	<p className="mt-2 text-sm text-red-700">
		<span className="font-medium">{message}</span>
	</p>
)

export default ErrorMessage
