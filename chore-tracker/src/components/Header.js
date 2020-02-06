
import React, { useEffect, useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import styled from "styled-components";

const HeaderDiv = styled.div`
  height: 7vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  position: fixed;
  top: 0;
`;

const HeaderNav = styled.nav`
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;


function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
    <HeaderDiv className="header">
      <div className="headrow">
        <NavLink to="/"></NavLink>
      </div>
      {isLoggedIn ? (
        <NavLink
          className="white"
          onClick={() => {
            setIsLoggedIn(false);
            localStorage.removeItem("token");
          }}
          to="/login"
        >
          <label className="logout">Logout</label>
        </NavLink>
      ) : (
        <HeaderNav className="nav">
          <NavLink to="/register" className="white">
            New User
          </NavLink>
          <NavLink to="/login" className="white">
            Login
          </NavLink>
          <NavLink to="/profile" className="white">
            Profile
          </NavLink>
        </HeaderNav>
      )}
    </HeaderDiv>
  );
}

export default Header;
