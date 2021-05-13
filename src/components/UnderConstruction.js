import { Card, CardMedia, Grid, makeStyles } from "@material-ui/core";
import React from "react";

import underConstruction from "../assets/images/under-construction.png";

const useStyles = makeStyles(() => ({
  root: {
    background: "none",
    boxShadow: "none",
  },
}));

const UnderConstruction = () => {
  const classes = useStyles();
  return (
    <Card
      container
      component={Grid}
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <CardMedia component="img" src={underConstruction} />
    </Card>
  );
};

export default UnderConstruction;
