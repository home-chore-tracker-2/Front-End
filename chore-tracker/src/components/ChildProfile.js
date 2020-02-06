import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ChoreCard from "./ChoreCard";
import ChildCard from "./ChildCard";
import styled from "styled-components";

const ChildProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10vh;
`;

function ChildProfile() {
  const [child, setChild] = useState({
    chores: []
  });
  const { id } = useParams();

  //   const [chores, setChores] = useState([]);

  useEffect(() => {
    axios
      .get(`https://chore-tracker-build.herokuapp.com/api/child/${id}`)
      .then(response => {
        console.log("profile child response", response);
        setChild(response.data);
      })
      .catch(err => {
        console.log(err);
      });

    // axios
    //   .get("https://chore-tracker-build.herokuapp.com/api/chores")
    //   .then(response => {
    //     console.log("profile chores response", response);
    //     setChores(response.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }, [id]);

  return (
    <ChildProfileDiv>
      {ChildCard(child)}

      {child.chores.map(chore => {
        return ChoreCard(chore);
      })}
    </ChildProfileDiv>
  );
}

export default ChildProfile;
