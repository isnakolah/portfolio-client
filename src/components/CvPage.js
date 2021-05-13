import React from "react";
import { changeTitle } from "../utils/title";
import UnderConstruction from "./UnderConstruction";

const CvPage = () => {
  changeTitle("My CV");

  return <UnderConstruction />;
};

export default CvPage;
