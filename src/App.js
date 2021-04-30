// libraries
import React, { Suspense, lazy } from "react";
import { CircularProgress, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";

// styles
import "fontsource-roboto";

// components
import SideNav from "./components/SideNav";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

// import Layout from "./components/layout/Layout";
const LandingPage = lazy(() => import("./components/LandingPage"));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* Side navigation */}
      <SideNav />

      {/* The main section of the application */}
      <main className={classes.content}>
        <Suspense fallback={<CircularProgress />}>
          <Router>
            <Route path="/" component={LandingPage} />
          </Router>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
