import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
       <nav className="nav">
       <h1>Chore Tracker!</h1>
           <ul>
            <li>
            <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/auth/login">Chore Tracker!</Link>
            </li>
           </ul>
          </nav>
				<Switch>
					<Route exact path="/auth/login" component={Login} />
					<Route path="/auth/login" component={Login} />
				</Switch>
			</div>
		</Router>
  );
}

export default App;
