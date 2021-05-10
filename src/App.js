import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

// styling
import theme from "./utils/theme";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.root} alignItems="center" justify="center">
        <Box>
          <Typography variant="h1" color="primary">
            This is so dope
          </Typography>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
