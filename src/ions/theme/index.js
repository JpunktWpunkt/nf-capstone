import { IconButton } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#F0A0F0",
			contrastText: "#00FFFF",
		},
		mode: "dark",
	},
	typography: {
		h2: {
			fontFamily: "fantasy",
		},
		h3: {
			fontFamily: "serif",
			fontWeight: 700,
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
					borderRadius: 0,
				},
			},
		},

		MuiCard: {
			styleOverride: {
				root: {
					backgroundColor: "#FFFF00",
					color: "#000000",
				},
			},
		},

		MuiCardMedia: {
			styleOverride: {
				root: {
					borderRadius: 20,
				},
			},
		},

		MuiCardHeader: {
			styleOverride: {
				subheader: {
					backgroundColor: "#0000FF",
					color: "#FFFF00",
				},
				title: {
					backgroundColor: "#0000FF",
					color: "#FFFF00",
				},
			},
		},
		MuiIconButton: {
			styleOverride: {
				root: {
					borderRadius: 0,
					backgroundColor: "#FF0000",
					color: "#000000",
					"&:hover": {
						backgroundColor: "#00FF00",
						color: "#000000",
					},
				},
			},
		},
	},
});

export default theme;
