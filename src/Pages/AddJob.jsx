import React from 'react'
import JobForm from '../Components/JobForm'

const AddJob=({jobs,setJobs})=> {
  return (
    <div>
    <h2>Add New Job</h2>   
    <JobForm jobs={jobs} setJobs={setJobs} />
    </div>
  )
}

export default AddJob
