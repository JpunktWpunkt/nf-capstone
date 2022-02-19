import { createMuiTheme } from "@material-ui/core/styles";

const famHubGreen = "#00798C";
const famHubBlue = "#30638E";
const famHubRed = "#D1495B";
const famHubYellow = "#EDAE49";

export default createMuiTheme({
	palette: {
		common: {
			green: `${famHubGreen}`,
			red: `${famHubRed}`,
			blue: `${famHubBlue}`,
			yellow: `${famHubYellow}`,
		},
		primary: {
			main: `${famHubGreen}`,
		},
		secondary: {
			main: `${famHubRed}`,
		},
	},
	Typography: {
		h3: {
			fontWeight: 300,
		},
	},
});
