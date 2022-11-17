/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {
			colors: {
				darkBlueLight: "#24263B",
				darkBlue: "#1F2235",
				mainRed: "#FF4A57",
				mainWhite: "#F6F1EC",
			},
			screens: {
				"hover-hover": { raw: "(hover: hover)" },
			},
		},
	},
	plugins: [],
}
