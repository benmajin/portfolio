import React from "react"
import { type AppType } from "next/app"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { clientEnv } from "../env/schema.mjs"

import { trpc } from "../utils/trpc"

import "../styles/globals.css"

// eslint-disable-next-line react/prop-types
const MyApp: AppType = ({ Component, pageProps }) => (
	<GoogleReCaptchaProvider
		//@ts-expect-error fixe this later
		reCaptchaKey={clientEnv.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
		scriptProps={{
			async: false,
			defer: false,
			appendTo: "head",
			nonce: undefined,
		}}>
		<Component {...pageProps} />
	</GoogleReCaptchaProvider>
)

export default trpc.withTRPC(MyApp)
