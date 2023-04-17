import React from "react";

const CarCard = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h4>{props.model}</h4>
    </div>
  );
};

export default CarCard;
