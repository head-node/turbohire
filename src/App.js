import React from "react";
import "./App.css";
import About from "./about";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="sidenav">
          <div>
            <Link to="/about">
              <div className="div-card">
                <div className="box"></div>
                <div className="child-textbox">
                  {" "}
                  <h3>DOCUMENT</h3>
                  <div className="text">
                    this is the first div for the container
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/about">
              <div className="div-card">
                <div className="box"></div>
                <div className="child-textbox">
                  {" "}
                  <h3>DOCUMENT</h3>
                  <div className="text">
                    this is the first div for the container
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/about">
              <div className="div-card">
                <div className="box"></div>
                <div className="child-textbox">
                  {" "}
                  <h3>DOCUMENT</h3>
                  <div className="text">
                    this is the first div for the container
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/about">
              <div className="div-card">
                <div className="box"></div>
                <div className="child-textbox">
                  {" "}
                  <h3>DOCUMENT</h3>
                  <div className="text">
                    this is the first div for the container
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/about">
              <div className="div-card">
                <div className="box"></div>
                <div className="child-textbox">
                  {" "}
                  <h3>DOCUMENT</h3>
                  <div className="text">
                    this is the first div for the container
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">{/* <Users >About</Link> */}</Route>
          <Route path="/">{/* <Home >About</Link> */}</Route>
        </Switch>
      </div>
    </Router>
  );
}
