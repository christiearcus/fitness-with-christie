import React, { useState } from "react";
import { Link } from "react-router-dom";
import dataShuffler from "../lib/dataShuffler";

import "../App.css";
import "./styles.css";

const shuffleActivities = (items, size) => dataShuffler(items).slice(0, size);

const ActivityList = ({ items, size }) => {
  const trimmedItems = items.slice(0, size);
  const getViewportSize = () => window.innerWidth;
  const [windowSize] = useState(getViewportSize);
  const [activities, setActivities] = useState(trimmedItems);

  return (
    <div className="activity-list">
      <div className="activity-list-nav">
        <button
          className="activity-list-shuffle App-button-link"
          onClick={() => setActivities(shuffleActivities(items, size))}
        >
          <i class="fas fa-random"></i>
          Shuffle
        </button>
        <Link className="App-button-link" to="/">
          <i class="fas fa-arrow-left"></i>
          {windowSize > 768 ? "Back to home" : ""}
        </Link>
      </div>
      <ul className="activity-list">
        {activities.map((activity) => {
          return <li>{activity}</li>;
        })}
      </ul>
    </div>
  );
};

export default ActivityList;
