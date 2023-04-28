import React from "react";
import { Link } from "react-router-dom";
// import img from "../images/audi.jpeg";
const CarCard = (props) => {
  return (
    <div className="flex gap-8 gap-2 p-4 flex-col items-center justify-center w-1/3 border-2 rounded-xl border-orange-500 hover:shadow-lg shadow-orange-500">
      <img className="w-9/12 " src={props.img} alt={props.model} />
      <div className="flex w-9/12  justify-between items-center ">
        <h1 className="font-semibold text-3xl">{props.name}</h1>
        <h4 className="font-medium text-xl">{props.models}</h4>
      </div>
      <Link
        to="/"
        className="font-medium text-xl rounded-xl w-48 h-12 flex items-center justify-center bg-orange-500"
      >
        Book Now
      </Link>
    </div>
  );
};

export default CarCard;
