import React from "react";
import ActivityList from "../activity-list";
import stretches from "./stretchData";

const Stretch = () => {
  return <ActivityList items={stretches} size={5} />;
};

export default Stretch;
