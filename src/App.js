// libraries
import React, { Suspense, lazy } from "react";
import { CircularProgress, CssBaseline, Box } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";

// styles
import "@fontsource/roboto";
import theme from "./utils/themes";

// images
import backgroundImage from "./assets/images/background-image.jpg";

// components
import Nav from "./components/Nav";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
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
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <CssBaseline />

        {/* Side navigation */}
        <Nav />

        {/* The main section of the application */}
        <main className={classes.content}>
          <Suspense fallback={<CircularProgress />}>
            <Router>
              <Route path="/" component={LandingPage} />
            </Router>
          </Suspense>
        </main>
      </Box>
    </ThemeProvider>
  );
};

export default App;
