import React from "react";
import BookBanner from "../components/BookBanner";
import PageHero from "../components/PageHero";
import Testimonial from "../components/Testimonial";
import Reviews from "../components/TestimonialData";
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
const Testimonials = () => {
  return (
    <div>
      <PageHero heading="Testimonials" subheading="Home/Testimonial" />
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
      <BookBanner />
    </div>
  );
};

export default Testimonials;
