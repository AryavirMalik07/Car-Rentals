import React from "react";
import "../styles/planTrip.css";
import img1 from "../images/car.png";
import img2 from "../images/contact.png";
import img3 from "../images/drive.png";
const PlanTrip = () => {
  return (
    <div className="max-width">
      <div className="plan-heading-div">
        <h2 className="plan-head-small absolute-center">Plan your trip now</h2>
        <h1 className="plan-primary-head absolute-center">
          Quick & easy car rental
        </h1>
      </div>
      <div className="feature-div">
        <div className="feature-box">
          <img className="feature-img" src={img1} alt="car" />
          <h2 className="feature-head">Select Car</h2>
          <p className="feature-text">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className="feature-box">
          <img className="feature-img" src={img2} alt="car" />
          <h2 className="feature-head">Contact Operator</h2>
          <p className="feature-text">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className="feature-box">
          <img className="feature-img" src={img3} alt="car" />
          <h2 className="feature-head">Let's Drive</h2>
          <p className="feature-text">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;
