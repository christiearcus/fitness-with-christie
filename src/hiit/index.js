import React from "react";
import { Link } from "react-router-dom";
import exercises from "./hiitData";

const Hiit = () => {
  return (
    <>
      <Link to="/">Back to home</Link>
      {exercises.map((exercise, index) => {
        return <li>{`${index + 1}. ${exercise}`}</li>;
      })}
    </>
  );
};

export default Hiit;
