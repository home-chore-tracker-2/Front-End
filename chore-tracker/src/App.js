import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import ChildProfile from "./components/ChildProfile";
import Footer from "./components/Footer";
import styled from "styled-components";

const AppDiv = styled.div``;

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
    <AppDiv className="App">
      <Header />
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/profile">
        <Profile children={children} />
      </Route>
      <Route path="/child/:id">
        <ChildProfile />
      </Route>
      <Footer />
    </AppDiv>
  );
}

export default App;
