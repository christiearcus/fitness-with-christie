import React from "react";
import { Link } from "react-router-dom";
import stretches from "./stretchData";

const Stretch = () => {
  return (
    <>
      <Link to="/">Back to home</Link>
      {stretches.map((stretch, index) => {
        return <li>{`${index + 1}. ${stretch}`}</li>;
      })}
    </>
  );
};

export default Stretch;
