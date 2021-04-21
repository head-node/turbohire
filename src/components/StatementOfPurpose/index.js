import React from "react";

const StatementOfPurpose = () => {
  const questionList = [
    "Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?",
    "Tell me about the last time something significant didn’t go according to plan at work. What was your role? What was the outcome?",
    "What are the three things that are most important to you in a job?",
  ];

  return (
    <>
      <ul className="list">
        {questionList.map((question,idx) => {
          return (
            <li >
              <div className="question">{idx+1}.{" "}{question}</div>
              <input
                className="answer"
                type="text"
                placeholder="Enter a description for the long answer"
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default StatementOfPurpose;
