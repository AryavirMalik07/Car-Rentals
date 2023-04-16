import React from "react";
import "../styles/HomeTestimonial.css";
const Testimonial = (props) => {
  return (
    <div>
      <div className="home-testimonial ">
        <p className="review">"{props.review}"</p>
        <div className="reviewer-info">
          <img className="reviewer-img" src={props.img} />
          <div className="reviewer-info-primary">
            <h3 className="reviewer-name">{props.name}</h3>
            <h3 className="reviewer-city">{props.city}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
