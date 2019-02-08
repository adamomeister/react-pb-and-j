import React from "react";
import About from "./about";
import ProductFeatures from "./product-features";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = () => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/#">PB & J</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features">Features</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/features" component={ProductFeatures} />
    </div>
  </Router>

);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export default NavBar;
