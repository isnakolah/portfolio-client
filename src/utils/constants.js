import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const { ...iconProps } = { fontSize: "small" };

export const socialDetails = [
  {
    name: "email",
    icon: <EmailIcon {...iconProps} />,
    to: "#",
  },
  {
    name: "linkedIn",
    icon: <LinkedInIcon {...iconProps} />,
    to: "https://www.linkedin.com/in/danielnakolah",
  },
  {
    name: "github",
    icon: <GitHubIcon {...iconProps} />,
    to: "https://github.com/isnakolah",
  },
  {
    name: "twitter",
    icon: <TwitterIcon {...iconProps} />,
    to: "https://twitter.com/is_nakolah",
  },
  {
    name: "facebook",
    icon: <FacebookIcon {...iconProps} />,
    to: "https://www.facebook.com/daniel.nakolah/",
  },
  {
    name: "instagram",
    icon: <InstagramIcon {...iconProps} />,
    to: "https://www.instagram.com/is_nakolah/",
  },
];

export const primaryLinks = [
  { id: "portfolio", to: "/porfolio", text: "Portfolio" },
  { id: "myOffer", to: "/my-offer", text: "My Offer" },
  { id: "contactMe", to: "/contact-me", text: "Contact Me" },
];

export const secondaryLinks = [
  { id: "myCv", to: "/cv", text: "My Cv" },
  { id: "selectedBlogs", to: "/selected-blogs", text: "Blogs" },
  { id: "techTalkSelection", to: "/tech-talk-selection", text: "Tech Talks" },
  { id: "certifications", to: "/cerfications", text: "Certifications" },
];
