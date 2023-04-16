import React from "react";
import PageHero from "../components/PageHero";
import "../styles/about.css";
import PlanTrip from "../components/PlanTrip";
import img from "../images/aboutus.jpg";
import BookBanner from "../components/BookBanner";
const About = () => {
  return (
    <div className="about ">
      <PageHero heading="About" subheading="Home/About" />
      <div className="aboutus">
        <img src={img} alt="img" />
        <div className="about-content">
          <h2>About Company</h2>
          <h1>You start the engine and your adventure begins</h1>
          <p>
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
        </div>
      </div>
      <PlanTrip />
      <BookBanner />
    </div>
  );
};

export default About;
