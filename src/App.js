import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Box, Grid } from "@material-ui/core";
import {
  ThemeProvider,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";

// styling
import theme from "./utils/theme";
import {
  pageBackground,
  mainAreaBackground,
  circleBackground,
} from "./utils/colors";

// components
import SideBar from "./components/SideBar";
import LandingPage from "./components/LandingPage";
import GenericNotFound from "./components/GenericNotFound";
// lazy loading
const Portfolio = lazy(() => import("./components/Portfolio"));
const CvPage = lazy(() => import("./components/CvPage"));
const OfferPage = lazy(() => import("./components/OfferPage"));
const ContactPage = lazy(() => import("./components/ContactPage"));

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    background: pageBackground,
  },
  main: {
    minHeight: "80vh",
    width: "60%",
    background: mainAreaBackground,
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
    background: circleBackground,
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
          <Grid item container xs={8} component={Box} p="1.5rem">
            {/* Lazy load components when routing */}
            <Suspense fallback={<div>loading...</div>}>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/cv" component={CvPage} />
                <Route exact path="/my-offer" component={OfferPage} />
                <Route exact path="/contact-me" component={ContactPage} />
                {/* Not found */}
                <Route exact path="/404" component={GenericNotFound} />
                <Redirect to="/404" />
              </Switch>
            </Suspense>
          </Grid>
        </Grid>
      </Grid>
      <Circle className={classes.topCircle} />
      <Circle className={classes.bottomCircle} />
    </ThemeProvider>
  );
};

export default App;
