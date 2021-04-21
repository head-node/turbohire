import React from 'react'

export default function App() {
  return (
    <div >
      <form>
        <div>
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
        </div>
      </form>
    </div>
  );
}
