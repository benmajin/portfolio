import React from "react"
import { type NextPage } from "next"
import Head from "next/head"
import NavBar from "../Components/NavBar"

const Home: NextPage = () => (
	<>
		<Head>
			<title>Benjamin Voissiere</title>
			<meta name="description" content="Portfolio" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<NavBar />
	</>
)

export default Home
