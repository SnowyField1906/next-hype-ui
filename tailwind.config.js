/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		fontFamily: {
			sans: ["Raleway", "sans-serif"],
			post: ["Urbanist", "sans-serif"],
			serif: ["Habibi", "serif"],
		},
		extend: {
			backgroundImage: {
				grad: "url('./assets/gradient.png')",
			},
			colors: {
				primary: {
					100: "#eedaf7",
					200: "#e3c7f7",
					300: "#d6acf7",
					400: "#ca8af8",
					500: "#AB57E9",
					600: "#8D37CC",
					700: "#7122AB",
					800: "#5E1B8F",
					900: "#490C75",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
