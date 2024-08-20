import React,{useState} from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Admin from './Admin'
import Patients from './Patients'
import PatientDetails from './PatientDetails'

function App() {
  const [Details, setDetails] = useState([]);
  const [selectedPatient, setselectedPatient] = useState('')
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/admin' element={<Admin Details={Details} setDetails={setDetails} />}></Route>
        <Route path='/patients' element={<Patients  Details={Details} setDetails={setDetails}  setselectedPatient={setselectedPatient}/>}></Route>
        <Route path='/patients/patientdetails' element={<PatientDetails  Details={Details} setDetails={setDetails} selectedPatient={selectedPatient}/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
