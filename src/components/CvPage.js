import React from "react";
import { changeTitle } from "../utils/title";

const CvPage = () => {
  changeTitle("My CV");

  return (
    <div>
      <p>This is the cv page</p>
    </div>
  );
};

export default CvPage;
