import { createTheme } from "@mui/material/styles";

const famHubGreen = "#00798C";
const famHubRed = "#D1495B";
//TODO hier noch anpassen
const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: `${famHubGreen}`,
			contrastText: "#fff",
		},
		secondary: {
			main: `${famHubRed}`,
			contrastText: "#fff",
		},
		background: {
			main: "#5B764A",
			contrastText: "#fff",
		},
	},
	typography: {
		h2: {
			fontFamily: ["Adobe Handwriting", "Homemade Apple", "cursive", "serif"].join(","),
		},

		h4: {
			fontFamily: ["Adobe Handwriting", "Homemade Apple", "cursive", "serif"].join(","),
		},
		h6: {
			fontFamily: "serif",
			fontSize: "14px",
		},
		shape: {
			borderRadius: 16,
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: "contained",
				disableRipple: true, //Ripple Effekt weg
				disableElevation: true, //schlagschatten weg
			},
			styleOverride: {
				//global alles rund ausser Button
				root: {
					borderRadius: 30,
				},
			},
		},
	},

	MuiIconButton: {
		styleOverride: {
			root: {
				borderRadius: 0,
				color: "#30638E",
				"&:hover": {
					color: "red",
				},
			},
		},
	},
});

export default theme;
