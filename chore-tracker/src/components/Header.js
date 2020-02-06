import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
    <div>
      <div>
        <div className="header">
          <div className="headrow">
            <NavLink to="/">
            </NavLink>
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
            <nav className="nav">
              <NavLink to="/auth/register" className="white">
                Register
              </NavLink>
              <NavLink to="/auth/login" className="white">
                Login
              </NavLink>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;