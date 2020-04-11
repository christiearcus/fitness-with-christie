import React from "react";
import FitnessList from "../fitness-list";
import exercises from "./hiitData";

const Hiit = () => {
  return <FitnessList items={exercises} />;
};

export default Hiit;
