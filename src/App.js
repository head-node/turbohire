import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./components/Details" 
import Documents from "./components/Documents"
export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="sidenav">
          <div>
            <Link style={{}} className="link" to="/">
              <div className="div-card">
                <div className="box"></div>
                <div className="child-textbox">
                  <h3>New Form</h3>
                  <div className="text">
                    this is the first div for the container
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link className="link" to="/Details">
              <div className="div-card">
                <div className="box"></div>
                <div className="child-textbox">
                  <h3>Details Collection</h3>
                  <div className="text">
                    this is the first div for the container
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link className="link" to="/Documents">
              <div className="div-card">
                <div className="box"></div>
                <div className="child-textbox">
                  <h3>Document Collection</h3>
                  <div className="text">
                    this is the first div for the container
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link className="link" to="/">
              <div className="div-card">
                <div className="box"></div>
                <div className="child-textbox">
                  <h3>Statement of Purpose</h3>
                  <div className="text">
                    this is the first div for the container
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link className="link" to="/">
              <div className="div-card">
                <div className="box"></div>
                <div className="child-textbox">
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
          {/* <Route path="/">
            
          </Route> */}
          <Route exact path="/Details"><Details/></Route>
          <Route exact path="/Documents"><Documents/></Route>
        </Switch>
      </div>
    </Router>
  );
}
