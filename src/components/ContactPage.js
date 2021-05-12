import React from "react";
import { changeTitle } from "../utils/title";

const ContactPage = () => {
  changeTitle("Contact Me");

  return (
    <div>
      <p>This is the contact page</p>
    </div>
  );
};

export default ContactPage;
