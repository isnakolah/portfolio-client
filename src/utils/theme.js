import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "roboto"].join(","),
    fontWeightBold: 400,
    fontWeightMedium: 200,
    fontWeightLight: 100,
    fontWeightRegular: 200,
  },
  palette: {
    primary: {
      main: "#cccccc",
    },
  },
});

export default theme;
