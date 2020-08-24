import React from "react";
import exercises from "../hiit/hiitData";
import stretches from "../stretch/stretchData";

export default () => (
  <div>
    <h2>Exercises</h2>
    <code>{JSON.stringify(exercises)}</code>
    <h2>Stretches</h2>
    <code>{JSON.stringify(stretches)}</code>
  </div>
);
