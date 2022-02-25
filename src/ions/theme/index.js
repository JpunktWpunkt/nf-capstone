import { createTheme } from "@mui/material/styles";

const famHubGreen = "#00798C";
const famHubBlue = "#30638E";
const famHubRed = "#D1495B";
const famHubYellow = "#EDAE49";
const famHubGrey = "#e0e8e3";
const famHubAddGreen = "#5B764A";
const MuiToolbar = {
	styleOverrides: {
		root: {
			justifyContent: "space-between",
		},
	},
};

const MuiButton = {
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
};

//TODO hier noch anpassen
const theme = createTheme({
	palette: {
		common: {
			green: famHubGreen,
			red: famHubRed,
			blue: famHubBlue,
			yellow: famHubYellow,
			grey: famHubGrey,
			addGreen: famHubAddGreen,
		},
		primary: {
			main: `${famHubGreen}`,
			contrastText: "#fff",
		},
		secondary: {
			main: `${famHubRed}`,
			contrastText: "#fff",
		},
		background: {
			default: `${famHubAddGreen}`,
			paper: `${famHubGrey}`,
		},
	},
	typography: {
		h2: {
			fontFamily: "'Adobe Handwriting',cursive",
		},

		h3: {
			fontFamily: "'Adobe Handwriting',cursive",
		},

		h4: {
			fontFamily: "'Adobe Handwriting',cursive",
		},
		h6: {
			fontFamily: "'Adobe Handwriting',cursive",
			fontSize: "14px",
		},
		shape: {
			borderRadius: 16,
		},
	},
	components: {
		MuiToolbar,
		MuiButton,
	},
});

export default theme;
