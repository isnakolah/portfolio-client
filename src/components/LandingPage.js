import React, { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@material-ui/core";

const words = [
  "React.js.",
  "C#(DotNet).",
  "Python.",
  "Django.",
  "GoLang.",
  "both front-end and backend.",
];

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length) return;

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <Grid
      item
      container
      direction="column"
      justify="center"
      component={Box}
      pr="1rem"
    >
      <Grid item variant="h4" component={Typography}>
        Hi, I&apos;m Daniel a software engineer specialized in{" "}
        <strong>
          {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </strong>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
