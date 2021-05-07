import { createMuiTheme } from "@material-ui/core/styles";
import { yellow, green } from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: green,
  },
  status: {
    danger: "orange",
  },
});

export default theme;
