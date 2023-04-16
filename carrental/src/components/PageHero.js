import React from "react";
import "../styles/pagehro.css";

const PageHero = ({ heading, subheading }) => {
  return (
    <div className="pageHero">
      <h1 className="about-head-primry max-width">{heading}</h1>
      <h1 className="about-head-sec max-width">{subheading}</h1>
    </div>
  );
};

export default PageHero;
