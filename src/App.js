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
                  <h3 style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "bolder",
                  fontSize: "16px",
                  lineHeight: "19px",
                  marginBottom:"12px",
                }}>New Form</h3>
                  <div className="text" style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "12px",
                  lineHeight: "14px",
                  width:"250px"
                }}>
                    Start creating a new form with the wide options of fields
                    available
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <p className="template">Explore the following Templates:</p>
          <div>
            <Link className="link" to="/Details">
              <div className="div-card">
                <div className="box"></div>
                <div className="child-textbox">
                  <h3 style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "bolder",
                  fontSize: "16px",
                  lineHeight: "19px",
                  marginBottom:"12px",
                }}>Details Collection</h3>
                  <div className="text" style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "12px",
                  lineHeight: "14px",
                  width:"250px"
                }}>
                    Collect information from Candidates on their education, work
                    experience, contact no,etc
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
                  <h3 style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "bolder",
                  fontSize: "16px",
                  lineHeight: "19px",
                  marginBottom:"12px",
                }}>Document Collection</h3>
                  <div className="text" style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "12px",
                  lineHeight: "14px",
                  width:"250px"
                }}>
                    Save time and efforts: Explore this template to find a set
                    of questions required for document collection
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
                  <h3 style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "bolder",
                  fontSize: "16px",
                  lineHeight: "19px",
                  marginBottom:"12px",
                }}>Statement of Purpose</h3>
                  <div className="text" style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "12px",
                  lineHeight: "14px",
                  width:"250px"
                }}>
                    Start creating a new form with the wide options of fields
                    available
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
                  <h3 style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "bolder",
                  fontSize: "16px",
                  lineHeight: "19px",
                  marginBottom:"12px",
                }}>Interview Availability</h3>
                  <div className="text" style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "12px",
                  lineHeight: "14px",
                  width:"250px"
                }}>
                    Start creating a new form with the wide options of fields
                    available
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="wrapper-content">
          <div className="preview">
            <p
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "bolder",
                fontSize: "20px",
                lineHeight: "23px",
              }}
            >
              Preview
            </p>
            <p
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "19px",
              }}
            >
              You will be able to customize the fields in the later stage
            </p>
          </div>
          <div className="content">
            <div className="title-content">
              <div className="title">
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "bolder",
                    fontSize: "20px",
                    lineHeight: "23px",
                  }}
                >
                  Name of the Enquiry Form
                </p>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "12px",
                    lineHeight: "14px",
                  }}
                >
                  One line description of the form
                </p>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "12px",
                    lineHeight: "14px",
                  }}
                >
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
                  <StatementOfPurpose />
                </Route>
                <Route exact path="/interview">
                  <InterviewAvailability />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

