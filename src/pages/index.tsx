import React from "react"
import { type NextPage } from "next"
import Head from "next/head"
import NavBar from "../Components/NavBar"
import Header from "../Components/Header"
import Projects from "../Components/Projects"
import AboutMe from "../Components/AboutMe"
import Skills from "../Components/Skills"
import Footer from "../Components/Footer"
import Contact from "../Components/Contact"

const Home: NextPage = () => (
	<>
		<Head>
			<title>Benjamin Voissiere</title>
			<meta name="description" content="Portfolio" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<NavBar />
		<Header />
		<AboutMe />
		<Projects />
		<Skills />
		<Contact />
		<Footer />
	</>
)

export default Home
