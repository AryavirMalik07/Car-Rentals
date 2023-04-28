import React, { useState } from "react";
import CarCard from "../components/CarCard";
import Users from "../components/CarCardData";
import PageHero from "../components/PageHero";
import Table from "../components/Table";

function data(val) {
  return <CarCard name={val.model} models={val.price} img={val.img} />;
}
const Vehicles = () => {
  // const [query, setQuery] = useState("");
  // const search = (data) => {
  //   return data.filter((item) => item.name.toLowerCase().include(query));
  // };
  return (
    <>
      <PageHero heading="Vehicles" subheading="Home/Vehicles" />

      <div className="max-width gap-8 p-8 flex flex-wrap items-center justify-center ">
        {Users.map(data)}
      </div>
    </>
  );
};

export default Vehicles;
