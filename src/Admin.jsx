import React, { useState } from "react";
import "./Admin.css";

function Admin({Details, setDetails}) {
 

  function handleSubmit(e) {
    e.preventDefault();

    setDetails([...Details,{
      name: e.target[0].value,
      age: e.target[1].value,
      city: e.target[2].value,
      symptoms:e.target[3].value,
    }]);

    e.target.reset();
  }

  return (
    <div className="admin-container">
      <h1>Registration Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">Enter your Name:</label>
          <input type="text" id="name" placeholder="Name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="age">Enter your Age:</label>
          <input type="number" id="age" placeholder="Age" name="age" required/>
        </div>
        <div className="form-group">
          <label htmlFor="city">Enter your City:</label>
          <input type="text" id="city" placeholder="City" name="city" required/>
        </div>
        <div className="form-group">
          <label htmlFor="symptoms">Enter your Symptoms:</label>
          <input
            type="text"
            id="symptoms"
            placeholder="Symptoms"
            name="symptoms" required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Admin;
