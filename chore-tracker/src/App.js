import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    axios
      .get("https://chore-tracker-build.herokuapp.com/api/child")
      .then(response => {
        setChildren(response);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/profile">
        <Profile children={children} />
      </Route>
      <Route path="/child/:id">
        <ChildProfile />
      </Route>
    </div>
  );
}

export default App;
