import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom'
import Home from './Pages/Home'
import AddJob from './Pages/AddJob'
import EditJob from './Pages/EditJob'
// import NavBar from './Components/NavBar'


function App() {
  const[jobs,setJobs]=useState([])

  useEffect(()=>{
    fetch('')
    .then((res)=>res.json())
    .then((data)=>setJobs(data))
    .catch((err)=>console.log(err));
  },[]);

  return (
    <>
    {/* <NavBar /> */}
    <Router>
      <Routes>
        <Route path='/' element={<Home jobs={jobs} setJobs={setJobs}/>} />
        <Route path='/add' element={<AddJob jobs={jobs} setJobs={setJobs}/>} />
        <Route path='/edit/:id' element={<EditJob jobs={jobs} setJobs={setJobs}/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
