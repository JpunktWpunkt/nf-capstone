import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#00798C",
			contrastText: "#fff",
		},
		mode: "light",
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
					borderRadius: 30,
				},
			},
		},
		Container: {
			styleOverride: {
				root: {
					backgroundColor: "#FFFF00",
					color: "#30638E",
				},
			},
		},

		TextField: {
			styleOverride: {
				root: {
					backgroundColor: "#FFFF00",
					color: "#30638E",
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
					color: "#30638E",
					"&:hover": {
						backgroundColor: "#00FF00",
						color: "#30638E",
					},
				},
			},
		},
	},
});

export default theme;
