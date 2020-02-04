import React from "react";

function ChoreCard(chore) {
  return (
    <div>
      <h3>{chore.choreName}</h3>
      <p>Due: {chore.dueDate}</p>
      <p>Description: {chore.description}</p>
      <p>Worth {chore.points} points!</p>
      <div></div>
    </div>
  );
}

export default ChoreCard;
