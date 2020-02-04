import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ChildCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: grey;
`;

function ChildCard(child) {
  return (
    <ChildCardDiv>
      <Link to={`/child/${child.id}`}>
        <h2>{child.username}</h2>
        <p>Points: {child.points}</p>
        <p>
          Clean Streak?{" "}
          {() => {
            if (child.cleanStreak > 0) {
              return "Yes";
            } else {
              return "No";
            }
          }}
        </p>
      </Link>
    </ChildCardDiv>
  );
}

export default ChildCard;
