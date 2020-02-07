import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import RegisterChild from "./RegisterChild";
import ChildCard from "./ChildCard";
import ChoreForm from "./ChoreForm";
import styled from "styled-components";
import axios from "axios";

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 3% auto;
  width: 100%;
`;

const ChildListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const ProfileH2 = styled.h2`
  font-size: 4rem;
  color: white;
  margin: 2%;
  text-shadow: black 0.1em 0.1em 0.2em;
`;

function Profile() {
  const [children, setChildren] = useState([]);
  useEffect(() => {
    axios
      .get("https://chore-tracker-build.herokuapp.com/api/child")
      .then(res => {
        console.log(res);
        setChildren(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <ProfileDiv>
      <ProfileH2>Username</ProfileH2>
      <ChildListDiv>
        {children.map(child => {
          return ChildCard(child);
        })}
      </ChildListDiv>
      <ChoreForm />
      <Route path="/register" component={RegisterChild} />
    </ProfileDiv>
  );
}

export default Profile;
