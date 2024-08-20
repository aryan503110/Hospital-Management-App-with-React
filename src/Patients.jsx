import React,{useState} from "react";
import "./Patients.css";
import { Link } from "react-router-dom";

function Patients({ Details,setDetails,setselectedPatient }) {
const [search, setsearch] = useState('')
console.log(search)
  function removeActivity(index) {
    const updatedDetails = Details.filter((elem, id) => {
      return index != id;
    });
    setDetails(updatedDetails);
  }
  return (
    <div className="patients-container">
      <center>
        <p>Number of Patients : {Details.length}</p>
      </center>
      <form onChange={(e)=>setsearch(e.target.value)}>
        <input className="search" type="text" placeholder="Search Patients By Name"></input>
      </form>
      <table className="patients-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Symptoms</th>
            <th>Delete</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {Details.filter((item)=>{
            return search.toLowerCase()==='' ? item: item.name.toLowerCase().includes(search)
          }).map((patient, index) => (
           
            <tr  key={index}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.city}</td>
              <td>{patient.symptoms}</td>
              <td>
                <button
                  onClick={() => {
                    removeActivity(index);
                  }}
                >
                  Delete
                </button>
              </td>
              <Link to='PatientDetails'><td>
                <button onClick={()=>setselectedPatient(patient)}>View</button>
              </td> </Link>
            </tr>
           
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Patients;
