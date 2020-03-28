import React from "react";
import { Link } from "react-router-dom";
import exercises from "./hiitData";

import "../App.css";
import "../Fitness.css";

const Hiit = () => {
  return (
    <>
      <div>
        <Link className="App-button-link" to="/">
          <i class="fas fa-arrow-left"></i>
          Back to home
        </Link>
      </div>
      <ul className="Fitness-list">
        {exercises.map(exercise => {
          return <li>{exercise}</li>;
        })}
      </ul>
    </>
  );
};

export default Hiit;
