import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Login from "./components/Login";
import FormikRegister from "./components/Register";
import RegisterChild from "./components/RegisterChild";
import ChildProfile from "./components/ChildProfile";
import Footer from "./components/Footer";
import styled from "styled-components";
import PrivateRoute from "./components/PrivateRoute";

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
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={FormikRegister} />
        <PrivateRoute exact path="/protected" component={Login} />
      </div>
      <Route path="/profile">
        <Profile children={children} />
      </Route>
      <Route path="/registerChild" component={RegisterChild} />
      <Route path="/child/:id">
        <ChildProfile />
      </Route>
      <Footer />
    </AppDiv>
  );
}

export default App;
