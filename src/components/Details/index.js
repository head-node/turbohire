import React from "react";
import "./index.css"
const Details = () => { 
    
  return (
    <div style={{display:'flex',justifyContent:"center"}}>
      <form className="details-container">
        <div>
          {" "}
          <label for="name">Name</label>
          <br></br>
          <input type="text" id="name"></input>
        </div>
        <div>
          <label for="email">Email</label>
          <br></br>
          <input type="email" id="email"></input>
        </div>
        <div>
          <label for="dob">Date of birth</label>
          <br></br>
          <input placeholder="DD/MM/YYYY" type="date" id="dob"></input>
        </div>
        <div>
          <label for="contact">Contact No</label>
          <br></br>
          <input type="text" id="contact"></input>
        </div>
      </form>
    </div>
  );
};

export default Details;
