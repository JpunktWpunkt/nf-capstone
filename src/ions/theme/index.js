import { createTheme } from "@mui/material/styles";

//TODO hier noch anpassen
const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#00798C",
			contrastText: "#fff",
		},
		secondary: {
			main: "#D1495B",
		},
	},
	/*	palette: {
		mode: "light",
		primary: {
			main: "#00798C",
			contrastText: "#fff",
		},
		secondary: {
			main: "#D1495B",
		},
	},*/
	typography: {
		h2: {
			fontFamily: "Adobe Handwriting",
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
