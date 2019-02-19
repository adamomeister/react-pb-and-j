import React from "react";
import About from "./about";
import ProductFeatures from "./product-features";
import SignUp from "./signup";
import Login from "./login";
import QuickbooksConnect from "./quickbooksconnect";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const NavBar = () => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">PB & J</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quickbookconnect">Connect To Quickbooks
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Route path="/about" component={About} />
      <Route path="/features" component={ProductFeatures} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/quickbooksconnect" component={QuickbooksConnect} />
    </div>
  </Router>

);

export default NavBar;
