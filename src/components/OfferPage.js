import React from "react";

import UnderConstruction from "./UnderConstruction";
import { changeTitle } from "../utils/title";

const OfferPage = () => {
  changeTitle("My Offer");

  return <UnderConstruction />;
};

export default OfferPage;
