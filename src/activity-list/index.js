import React, { useState } from "react";
import { Link } from "react-router-dom";
import ActivityClock from "../activity-clock";
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
        <div className="activity-list-nav-inner">
          <button
            className="activity-list-shuffle App-button-link"
            onClick={() => setActivities(shuffleActivities(items, size))}
          >
            <i className="fas fa-random"></i>
            Shuffle
          </button>
          <Link className="App-button-link" to="/">
            <i className="fas fa-arrow-left"></i>
            {windowSize > 768 ? "Back to home" : ""}
          </Link>
        </div>
      </div>
      <ActivityClock />
      <ul className="activity-list-items">
        {activities.map((activity, index) => {
          return <li key={`activity-${index}`}>{activity}</li>;
        })}
      </ul>
    </div>
  );
};

export default ActivityList;
