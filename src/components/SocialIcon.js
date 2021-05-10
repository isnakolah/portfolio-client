import React from "react";
import { ListItem, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  icon: {
    "& span svg": {
      fill: "#d9d7da80",
      "&:hover": {
        fill: "white",
      },
    },
  },
}));

const SocialIcon = ({ name, to, icon }) => {
  const classes = useStyles();
  return (
    <ListItem key={name} disableGutters>
      <a href={to} target="_blank" rel="noopener noreferrer">
        <IconButton aria-label={name} size="small" className={classes.icon}>
          {icon}
        </IconButton>
      </a>
    </ListItem>
  );
};

SocialIcon.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string,
  icon: PropTypes.node,
};

export default SocialIcon;
