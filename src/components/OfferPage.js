import React from "react";
import { changeTitle } from "../utils/title";

const OfferPage = () => {
  changeTitle("My Offer");

  return (
    <div>
      <p>This is the offer page</p>
    </div>
  );
};

export default OfferPage;
