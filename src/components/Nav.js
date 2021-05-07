import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink, useHistory } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  List,
  Drawer,
  Hidden,
  ListItem,
  ListItemText,
  CardMedia,
  Typography,
  CardContent,
  IconButton,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

import profileImage from "../assets/images/profile-photo.jpg";

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "uppercase",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  card: {
    marginTop: 40,
    cursor: "pointer",
    boxShadow: "none",
    "& h1": {
      fontSize: 20,
      fontWeight: "500",
    },
    "& h2": {
      fontSize: 16,
      fontWeight: "300",
    },
  },
  cardMedia: {
    width: 152,
    height: 152,
    borderRadius: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    opacity: "1",
  },
  cardContent: {
    textAlign: "center",
  },
  sideNav: {
    paddingLeft: "1rem",
    "& li": {
      paddingBottom: 0,
      paddingTop: 0,
    },
    "& a": {
      textDecoration: "none",
      color: "inherit",
      "& .MuiTypography-body1": {
        fontSize: 14,
      },
    },
  },
  footer: {
    marginLeft: "1rem",
    "& p": {
      fontSize: "11px",
    },
  },
}));
const NavDrawer = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleProfileClick = () => {
    history.push("/");
  };

  const primaryLinks = [
    { id: "portfolio", to: "/porfolio", text: "Portfolio" },
    { id: "myOffer", to: "/my-offer", text: "My Offer" },
    { id: "contactMe", to: "/contact-me", text: "Contact Me" },
  ];
  const secondaryLinks = [
    { id: "myCv", to: "/cv", text: "My Cv" },
    { id: "techTalkSelection", to: "/tech-talk-selection", text: "Tech Talks" },
    { id: "selectedBlogs", to: "/selected-blogs", text: "Blogs" },
  ];

  const navLinks = (items) => {
    return (
      <List>
        {items.map((item) => (
          <ListItem key={item.id}>
            <NavLink to={item.to}>
              <ListItemText primary={item.text} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    );
  };

  const socialMedia = () => {
    return [
      {
        name: "email",
        icon: <EmailIcon />,
        to: "#",
      },
      {
        name: "linkedIn",
        icon: <LinkedInIcon />,
        to: "https://www.linkedin.com/in/danielnakolah",
      },
      {
        name: "github",
        icon: <GitHubIcon />,
        to: "https://github.com/isnakolah",
      },
      {
        name: "twitter",
        icon: <TwitterIcon />,
        to: "https://twitter.com/is_nakolah",
      },
      {
        name: "facebook",
        icon: <FacebookIcon />,
        to: "https://www.facebook.com/daniel.nakolah/",
      },
      {
        name: "instagram",
        icon: <InstagramIcon />,
        to: "https://www.instagram.com/is_nakolah/",
      },
    ].map((item) => (
      <ListItem key={item.name}>
        <Grid item xs={1}>
          <a href={item.to} target="_blank" rel="noopener noreferrer">
            <IconButton aria-label={item.name}>{item.icon}</IconButton>
          </a>
        </Grid>
      </ListItem>
    ));
  };
  return (
    <Box className={classes.root}>
      <Box className={toolbar} />
      <Grid container direction="column">
        <Grid item>
          <Card className={classes.card} onClick={handleProfileClick}>
            <CardMedia
              component="img"
              image={profileImage}
              title="Profile Image"
              alt="Profile Image"
              className={classes.cardMedia}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="h1">Daniel Nakolah</Typography>
              <Typography variant="h2">Full-Stack Software Engineer</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          container
          direction="column"
          className={classes.sideNav}
          spacing={2}
          xs={10}
        >
          {/* Primary links for /portfolio, /my-offer, contact-me */}
          <Grid item>{navLinks(primaryLinks)}</Grid>
          {/* Secondary links for /my-cv, /selected-tech-talks, /blogs */}
          <Grid item>{navLinks(secondaryLinks)}</Grid>
          <Grid item className={classes.footer} container direction="column">
            <Grid item>
              <Typography paragraph>get in touch</Typography>
            </Grid>
            <Grid item container>
              {/* SocialMedia Contacts */}
              <List>{socialMedia()}</List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const Nav = ({ window }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.paper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <NavDrawer />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <NavDrawer />
        </Drawer>
      </Hidden>
    </nav>
  );
};

Nav.propTypes = {
  window: PropTypes.func,
};

export default Nav;
