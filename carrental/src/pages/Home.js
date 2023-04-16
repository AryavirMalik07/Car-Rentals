import React from "react";
import HeroSection from "../components/HeroSection";
import PlanTrip from "../components/PlanTrip";
import TagSection from "../components/TagSection";
// import CarBox from "../components/CarBox";
import PickCar from "../components/PickCar";
import Testimonial from "../components/Testimonial";
import Reviews from "../components/TestimonialData";
import Faq from "../components/Faq";
// import Faqs from "../components/Faqs";

function data(val) {
  return (
    <Testimonial
      review={val.review}
      img={val.img}
      name={val.name}
      city={val.city}
    />
  );
}
const Home = () => {
  return (
    <div>
      <HeroSection />
      <PlanTrip />
      <PickCar />
      <TagSection />
      <div className="testimonial max-width ">
        <div className="testimonial-intro">
          <h3>Reviewed by People</h3>
          <h1>Client's Testimonials</h1>
          <p>
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="test">{Reviews.map(data)}</div>
      </div>
      <Faq />

      {/* <Faqs /> */}
    </div>
  );
};

export default Home;
