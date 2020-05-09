import React from "react";
import ActivityList from "../activity-list";
import exercises from "./hiitData";

const Hiit = () => {
  return <ActivityList items={exercises} size={10} />;
};

export default Hiit;
