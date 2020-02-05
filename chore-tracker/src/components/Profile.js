import React from "react";
import ChildCard from "./ChildCard";
import ChoreForm from "./ChoreForm";
import styled from "styled-components";

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 3% auto;
`;

const ChildListDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

function Profile(props) {
  return (
    <ProfileDiv>
      <h2>username</h2>
      <ChildListDiv>
        {props.children.map(child => {
          return ChildCard(child);
        })}
      </ChildListDiv>
      <ChoreForm />
    </ProfileDiv>
  );
}

export default Profile;
