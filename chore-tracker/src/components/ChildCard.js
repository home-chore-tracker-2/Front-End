import React from "react";
import { NavLink } from "react-router-dom";

function ChildCard(child) {
  return (
    <NavLink className="child-card" to={`/child/${child.id}`}>
      <h2>{child.username}</h2>
      <p>Points: {child.points}</p>
      <p>
        Clean Streak?
        {() => {
          if (child.cleanStreak >= 1) {
            return <span>"Yes"</span>;
          } else {
            return <span>"No"</span>;
          }
        }}
      </p>
    </NavLink>
  );
}

export default ChildCard;
