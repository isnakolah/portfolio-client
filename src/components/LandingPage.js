import React from "react";
import { Grid, Typography } from "@material-ui/core";

const LandingPage = () => {
  return (
    <Grid item container direction="column" justify="center">
      <Grid item variant="h4" component={Typography}>
        Hi, I&apos;m Daniel a software engineer specialized in both{" "}
        <strong>frontend and backend</strong>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
