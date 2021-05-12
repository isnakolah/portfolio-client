import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

import notFound from "../../assets/images/not-found.png";

const useStyles = makeStyles(() => ({
  root: {
    background: "none",
    boxShadow: "none",
    "& img": {
      width: "auto",
      height: "80%",
    },
    "& h4": {
      padding: "0",
    },
  },
}));

const GenericNotFound = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      component={Card}
      className={classes.root}
    >
      <CardMedia component="img" src={notFound} alt="something went wrong" />
      <CardContent component={Typography} variant="h4">
        404. Page Not Found.
      </CardContent>
    </Grid>
  );
};

export default GenericNotFound;
