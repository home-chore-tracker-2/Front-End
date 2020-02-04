import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ChoreCard from "./ChoreCard";

function ChildProfile(props) {
  console.log("props", props);
  const [child, setChild] = useState;
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://chore-tracker-build.herokuapp.com/api/child/${id}`)
      .then(response => {
        setChild(response);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div>
      <h2>{child.username}</h2>
      <div>
        {chores.map(chore => {
          return <ChoreCard chore={chore} />;
        })}
      </div>
    </div>
  );
}

export default ChildProfile;
