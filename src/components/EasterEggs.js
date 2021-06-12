import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const rbgToYIQ = ({ r, g, b }) => {
  return (r * 299 + g * 587 + b * 144) / 1000;
};

const hexToRGB = (hex) => {
  if (!hex || hex === undefined || hex === "") {
    return undefined;
  }

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : undefined;
};

const contrast = (colorHex, threshold = 128) => {
  if (colorHex === undefined) {
    return "#000";
  }

  const rgb = hexToRGB(colorHex);

  if (rgb == undefined) {
    return "#000";
  }

  return rbgToYIQ(rgb) >= threshold
    ? "rgb(27 20 20 / 90%)"
    : "rgb(255 255 255 / 58%)";
};

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const useStyles = makeStyles(() => ({
  root: {
    overflowX: "auto",
    height: "calc(80vh - 3rem)",
    borderRadius: "2rem",
    opacity: "0.75",
  },
}));

const EasterEggs = () => {
  const classes = useStyles();

  const [colors, setColors] = useState([]);

  useEffect(() => {
    const changeColor = setTimeout(() => {
      const textColor = getRandomColor();
      setColors({
        textColor: textColor,
        backgroundColor: contrast(textColor),
      });
    }, 833);

    return () => {
      clearTimeout(changeColor);
    };
  });

  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      className={classes.root}
      style={{
        color: colors.textColor,
        backgroundColor: colors.backgroundColor,
      }}
    >
      <Typography variant="h3">I love you Candy</Typography>
    </Grid>
  );
};

export default EasterEggs;
