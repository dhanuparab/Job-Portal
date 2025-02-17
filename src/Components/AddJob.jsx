import React from 'react'
import JobForm from './JobForm'
import { Link } from 'react-router'
import logo from '../assets/job-portal.png';


const AddJob = ({ jobs, setJobs }) => {
  return (
    <div>
      <div className='container-fluid bg-primary ' style={{ height: '80px' }}>
        <Link className="navbar-brand text-white d-flex align-items-center" to="/">
          <img src={logo} height={30} width={40} alt="Logo" className="me-2" style={{ marginTop: '23px' }} />
          <h3 style={{ marginTop: '28px' }}>Jobs Portal</h3>
        </Link>
        {/* <ul className="navbar-nav  ms-auto">
          <Link className="nav-link text-white " to="/">Home</Link>
      </ul> */}
      </div>

      <JobForm jobs={jobs} setJobs={setJobs} />
    </div>
  )
}

export default AddJob
