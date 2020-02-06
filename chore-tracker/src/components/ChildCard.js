import React from "react";
import { NavLink } from "react-router-dom";

function ChildCard(child) {
  const hasCleanStreak = child => {
    if (child.cleanStreak === 0 || child.cleanStreak === null) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <NavLink className="child-card" to={`/child/${child.id}`}>
      <h2>{child.username}</h2>
      <p>Points: {!child.points ? 0 : child.points}</p>
      <p>Clean Streak? {hasCleanStreak(child) ? "Yes" : "No"}</p>
    </NavLink>
  );
}

export default ChildCard;
