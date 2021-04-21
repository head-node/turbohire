import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./components/Details";
import Document from "./components/Documents";
import StatementOfPurpose from "./components/StatementOfPurpose";
import InterviewAvailability from "./components/InterviewAvailability";
// import StatementOfPurpose from "./components/StatementOfPurpose";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
            <Link className="link" to="/statementofpurpose">
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
            <Link className="link" to="/interview">
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
        <div className="wrapper-content">
          <div className="preview">
          <p>Preview</p>
          <p>You will be able to customize the fields in the later stage</p>
          </div>
          <div className="content">
            <div className="title-content">
              <div className="title">
                <p>Name of the Enquiry Form</p>
                <p>One line description of the form</p>
                <p>
                  Provide the following information to process your application
                </p>
              </div>
            </div>
            <div className="main-content">
              <Switch>
                <Route exact path="/Details">
                  <Details />
                </Route>
                <Route exact path="/Documents">
                  <Document />
                </Route>
                <Route exact path="/statementofpurpose">
                  <StatementOfPurpose/>
                </Route>
                <Route exact path="/interview">
                  <InterviewAvailability/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

{
  /* <div className="link-box new-form">
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
          <div>
 */
}
