import React from "react";
import "./App.css";
import About from "./about";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StatementOfPurpose from "./components/StatementOfPurpose";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="sidenav">
          <div className="link-box new-form">
            <div className="frame"></div>
            <div className="frame-name">
              <p className="frame-title">New Form</p>
              <p className="frame-detail">
                Start creating a new form with the wide options of fields
                available
              </p>
            </div>
          </div>

          <p className="template">Explore the following Templates:</p>
          <div className="link-box">
            <div className="frame"></div>
            <div className="frame-name">
              <p className="frame-title">Details Collection</p>
              <p className="frame-detail">
                Collect information from Candidates on their education, work
                experience, contact no,etc
              </p>
            </div>
          </div>
          <div className="link-box">
            <div className="frame"></div>
            <div className="frame-name">
              <p className="frame-title">Document Collection</p>
              <p className="frame-detail">
                Save time and efforts: Explore this template to find a set of
                questions required for document collection
              </p>
            </div>
          </div>
          <div className="link-box">
            <div className="frame"></div>
            <div className="frame-name">
              <p className="frame-title">Statement of Purpose</p>
              <p className="frame-detail">
                Start creating a new form with the wide options of fields
                available
              </p>
            </div>
          </div>
          <div className="link-box">
            <div className="frame"></div>
            <div className="frame-name">
              <p className="frame-title">Interview Availability</p>
              <p className="frame-detail">
                Start creating a new form with the wide options of fields
                available
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper-content">
          <p>Preview</p>
          <p>You will be able to customize the fields in the later stage</p>
          <div className="content">
          <div className="title-content">
            <div className="title">
            <p >Name of the Enquiry Form</p>
            <p>One line description of the form</p>
            <p>Provide the following information to process your application</p>
            </div>
          </div>
          <div className="main-content">
            <StatementOfPurpose/>
          </div>
          </div>
        </div>
      </div>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">{/* <Users >About</Link> */}</Route>
          <Route path="/">{/* <Home >About</Link> */}</Route>
        </Switch>
      </Router>
    </>
  );
}
