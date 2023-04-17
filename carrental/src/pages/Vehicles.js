import React from "react";
import CarCard from "../components/CarCard";
import Users from "../components/CarCardData";
import PageHero from "../components/PageHero";
import Table from "../components/Table";

function data(val) {
  return <CarCard name={val.model} model={val.model} />;
}
const Vehicles = () => {
  return (
    <div>
      <PageHero heading="Vehicles" subheading="Home/Vehicles" />
      {/* <div>
        <input
          type=""
          className="search-product"
          placeholder="Search"
          // onChange={SearchHandler}
        />
        {Users.map(data)}
      </div> */}
      <Table />
    </div>
  );
};

export default Vehicles;
