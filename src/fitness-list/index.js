import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";
import "../Fitness.css";

const FitnessList = ({ items }) => {
  const getSize = () => window.innerWidth;
  const [windowSize] = useState(getSize);

  return (
    <>
      <div className="Fitness-list-nav">
        <Link className="App-button-link" to="/">
          <i class="fas fa-arrow-left"></i>
          {windowSize > 768 ? "Back to home" : ""}
        </Link>
      </div>
      <ul className="Fitness-list">
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default FitnessList;
