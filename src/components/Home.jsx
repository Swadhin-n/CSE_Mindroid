import React from "react";
import Carousel from "./Carousel";
import YearMonthForm from "./YearMonthForm";
import Card from "./Card";

const Home = () => {
  return (
    <div className="flex-1 px-4 md:px-8">
      <Carousel />
      <YearMonthForm />
      <Card />
    </div>
  );
};

export default Home;