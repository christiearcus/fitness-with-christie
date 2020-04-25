import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "react-collapse";

import "../App.css";
import "./styles.css";

const ActivityList = ({ items }) => {
  const getSize = () => window.innerWidth;
  const setItemKeys = () => {
    return [
      items.map((_, index) => ({
        [`item-${index}`]: false,
      })),
    ];
  };

  const [windowSize] = useState(getSize);
  const [isOpen, toggleIsOpen] = useState(setItemKeys());

  console.log("hi", isOpen);

  return (
    <div className="activity-list">
      <div className="activity-list-nav">
        <Link className="App-button-link" to="/">
          <i class="fas fa-arrow-left"></i>
          {windowSize > 768 ? "Back to home" : ""}
        </Link>
      </div>
      <ul className="activity-list">
        {items.map((item, index) => {
          return (
            <>
              <li onClick={() => toggleIsOpen(!isOpen)}>{item}</li>
              <Collapse
                className="activity-list-description"
                isOpened={() => isOpen[index][`item-${index}`]}
              >
                hi mate
              </Collapse>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default ActivityList;
