import React from "react";
import { Box, Grid } from "@material-ui/core";
import {
  ThemeProvider,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";

// styling
import theme from "./utils/theme";

// components
import SideBar from "./components/SideBar";
import MainArea from "./components/MainArea";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    background: "linear-gradient(to right top, #65dfc9, #6cdbeb)",
  },
  main: {
    minHeight: "80vh",
    width: "60%",
    background:
      "linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))",
    borderRadius: "2rem",
    zIndex: "2",
    backdropFilter: "blur(2rem)",
  },
  topCircle: {
    top: "5%",
    right: "15%",
  },
  bottomCircle: {
    bottom: "5%",
    left: "10%",
  },
}));

const Circle = withStyles((theme) => ({
  root: {
    background:
      "linear-gradient(to right bottom,rgba(255, 255, 255, 0.8),rgba(255, 255, 255, 0.3))",
    position: "absolute",
    borderRadius: "50%",
    [theme.breakpoints.down("xl")]: {
      height: "13rem",
      width: "13rem",
    },
    [theme.breakpoints.up("xl")]: {
      height: "20rem",
      width: "20rem",
    },
  },
}))(Box);

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <>
        <Grid
          container
          className={classes.root}
          alignItems="center"
          justify="center"
          component="main"
        >
          <Grid container item component="section" className={classes.main}>
            <Grid item container xs={4} component="aside">
              <SideBar />
            </Grid>
            <Grid item container xs={8} component="main">
              <MainArea />
            </Grid>
          </Grid>
        </Grid>
        <Circle className={classes.topCircle} />
        <Circle className={classes.bottomCircle} />
      </>
    </ThemeProvider>
  );
};

export default App;
