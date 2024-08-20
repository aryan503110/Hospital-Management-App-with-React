import React from 'react'
import './PatientDetails.css'

function PatientDetails({selectedPatient}) {
  return (
    <div className='patient-details'>
    <div id="patient-showcase">
      <div id="picture">
        <img src="https://voice.ons.org/sites/default/files/2018-12/1000_iStock-481073846.jpg" alt={selectedPatient.name} />
      </div>
      <div id="details">
        <h2>{selectedPatient.name}</h2>
        <p><strong>Age:</strong> {selectedPatient.age}</p>
        <p><strong>City:</strong> {selectedPatient.city}</p>
        <p><strong>Symptoms:</strong> {selectedPatient.symptoms}</p>
      </div>
    </div>

    <div className="medical-history">
      <h3>Medical History</h3>
      <ul>
        <li>Previous visit: {Math.floor(Math.random()*10)} months ago</li>
        <li>Chronic conditions: None</li>
      </ul>
    </div>

    <div className="treatment-plan">
      <h3>Treatment Plan</h3>
      <p>Current medication: Amoxicillin 500mg, twice daily for {Math.floor(Math.random()*10)} days</p>
      <p>Next appointment: {Math.floor(Math.random()*10)} weeks from today</p>
    </div>

  </div>
  )
}

export default PatientDetails
