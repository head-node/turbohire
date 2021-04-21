import React from "react";
import "./index.css";
const Document = () => {
  const sections = [
    "10th Marksheet",
    "12th Marksheet",
    "Graduation Marksheet",
    "Post Graduation Marksheet",
    "Offer Letter",
    "Salary Slips",
    "Bank Statement",
    "Increment Letter (if any)",
    "Others (if any)",
  ];
  return (
    <div>
      <form className="document-container">
        <ul >
          {sections.map((item, idx) => {
            return (
              <li >
                <div>
                  <label for={idx}>{idx+1}.{" "}{item}</label>
                  <br></br>
                  <input type="file" id={idx}></input>
                </div>
              </li>
            );
          })}
        </ul>
        {/* <div>
          <label for="10th">10th Marksheet</label>
          <br></br>
          <input type="file" id="10th"></input>
        </div>
        <div>
          <label for="12th">12th Marksheet</label>
          <br></br>
          <input type="file" id="12th"></input>
        </div>
        <div>
          <label for="graduation">Graduation Marksheet</label>
          <br></br>
          <input type="file" id="graduation"></input>
        </div>
        <div>
          <label for="post-grad">Post Grraduation Marksheet</label>
          <br></br>
          <input type="file" id="post-grad"></input>
        </div>
        <div>
          <label for="offer-letter">Offer Letter</label>
          <br></br>
          <input type="file" id="offer-letter"></input>
        </div>
        <div>
          <label for="salary-slip">Salary Slips</label>
          <br></br>
          <input type="file" id="salary-slip"></input>
        </div>
        <div>
          <label for="bank-st">Bank Statement</label>
          <br></br>
          <input type="file" id="bank-st"></input>
        </div>
        <div>
          <label for="inc-letter">Increment Letter (if any)</label>
          <br></br>
          <input type="file" id="inc-letter"></input>
        </div>
        <div>
          <label for="others">Others (if any)</label>
          <br></br>
          <input type="file" id="others"></input>
        </div> */}
      </form>
    </div>
  );
}

export default Document;