import React from "react"
import { type AppType } from "next/app"

// eslint-disable-next-line import/no-unresolved
import { trpc } from "../utils/trpc"

import "../styles/globals.css"

// eslint-disable-next-line react/prop-types
const MyApp: AppType = ({ Component, pageProps }) => (
	<Component {...pageProps} />
)

export default trpc.withTRPC(MyApp)
