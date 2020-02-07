import React, {  useState } from "react";
import { NavLink  } from "react-router-dom";
import styled from "styled-components";
import Img from "../assets/logo.png";

const HeaderDiv = styled.div`
  height: 7vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: gray;
  position: fixed;
  top: 0;
  z-index: 1;
  border-bottom: 1px solid black;
`;

const HeaderNav = styled.nav`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  max-height: 100%;
`;

const LogoImg = styled.img`
  max-height: 5vh;
  -webkit-filter: drop-shadow(3px 3px 3px #222);
  filter: drop-shadow(3px 3px 3px #222);
`;

const TitleH1 = styled.h1`
  text-shadow: 3px 3px 3px #222;
  color: white;
  margin: 1%;
`;

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
    <HeaderDiv className="header">
      <TitleDiv>
        <LogoImg src={Img} alt="logo" />
        <TitleH1>Chore Tracker</TitleH1>
      </TitleDiv>
      <div className="headrow">
        <NavLink to="/"></NavLink>
      </div>
      {isLoggedIn ? (
        <>
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
          <NavLink to="/profile" className="white">
            Profile
          </NavLink>
          <NavLink to="/registerChild" className="white">
          New Child
          </NavLink>
          </>
      ) : (
        <HeaderNav className="nav">
          <NavLink to="/register" className="white">
            New User
          </NavLink>

          <NavLink to="/" className="white">

            Login
          </NavLink>

        </HeaderNav>
      )}
    </HeaderDiv>
  );
}

export default Header;
