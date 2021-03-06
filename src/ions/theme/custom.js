import { createTheme } from "@material-ui/core/styles";
/*import { createTheme } from "@mui/material/styles";*/

/*Palette*/

const famHubBlue = "#30638E";
const famHubGreen = "#00798C";
const famHubRed = "#D1495B";
const famHubYellow = "#EDAE49";
const famHubGrey = "#e0e8e3";
/*Typography*/
const typoFontWeight300 = "300";
const typoFontWeight600 = "600";

const theme = createTheme({
	palette: {
		common: {
			green: `${famHubGreen}`,
			red: `${famHubRed}`,
			blue: `${famHubBlue}`,
			yellow: `${famHubYellow}`,
			grey: `${famHubGrey}`,
		},
		primary: {
			main: `${famHubGreen}`,
			contrastText: "#fff",
		},
		secondary: {
			main: `${famHubRed}`,
		},
		background: {
			default: `${famHubGrey}`,
			paper: `${famHubGrey}`,
		},
	},
	Typography: {
		h3: `${typoFontWeight300}`,
		h6: `${typoFontWeight600}`,
	},
});

export default theme;
