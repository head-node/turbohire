import React from "react";
import "./index.css";

const StatementOfPurpose = () => {
  const questionList = [
    "Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?",
    "Tell me about the last time something significant didn’t go according to plan at work. What was your role? What was the outcome?",
    "What are the three things that are most important to you in a job?",
  ];

  return (
    <>
      <ul className="list">
        {questionList.map((question, idx) => {
          return (
            <li className="question-list">
              <div
                className="question"
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                {idx + 1}. {question}
              </div>
              <input
                className="answer"
                type="text"
                placeholder="Enter a description for the long answer"
              />
              <div
                className="wordlimit"
                style={{
                  display: "flex",
                  justifyContent: "end",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "10px",
                  lineHeight: "12px",
                }}
              >
                300 word limit
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default StatementOfPurpose;
