import {
  Grid,
  Card,
  List,
  ListItem,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

import profilePhoto from "../assets/images/profile-photo.jpg";

const useStyles = makeStyles(() => ({
  root: {
    background:
      "linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))",
    textAlign: "center",
    borderRadius: "2rem 0 0 2rem",
    fontSize: "0.85rem",
  },
  card: {
    backgroundColor: "transparent",
    boxShadow: "none",
    cursor: "pointer",
    "& img": {
      width: "4rem",
      height: "4rem",
      borderRadius: "50%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  nav: {
    "& div": {
      margin: "1rem 0 1rem 0",
    },
  },
}));

const SideBar = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      direction="column"
      alignItems="center"
      justify="space-evenly"
    >
      <Grid item>
        <Card className={classes.card}>
          <CardMedia image={profilePhoto} alt="profile photo" component="img" />
          <CardContent>
            <Typography>Daniel Nakolah</Typography>
            <Typography>FullStack Software Engineer</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid>
        <List component="nav" className={classes.nav}>
          <ListItem component="div">
            <LibraryBooksIcon />
            <Typography>Portfolio</Typography>
          </ListItem>
          <ListItem component="div">
            <LibraryBooksIcon />
            <Typography>Portfolio</Typography>
          </ListItem>
          <ListItem component="div">
            <LibraryBooksIcon />
            <Typography>Portfolio</Typography>
          </ListItem>
          <ListItem component="div">
            <LibraryBooksIcon />
            <Typography>Portfolio</Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default SideBar;
