import React from "react";
import styled from "styled-components";

const ChoreCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: grey;
  color: white;
  width: 75%;
  border: 1px solid black;
  border-radius: 7px;
  opacity: 0.9;
  margin: 2%;
`;

function ChoreCard(chore) {
  return (
    <ChoreCardDiv>
      <h3>{chore.choreName}</h3>
      <p>Due: {chore.dueDate}</p>
      <p>Description: {chore.description}</p>
      <p>Worth {chore.points} points!</p>
    </ChoreCardDiv>
  );
}

export default ChoreCard;
