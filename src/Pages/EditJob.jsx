import React from 'react'
import JobForm from '../Components/JobForm'

function EditJob() {
  return (
    <div>
      <h2>Edit Job</h2>
      <JobForm jobs={jobs} setJobs={setJobs} />
    </div>
  )
}

export default EditJob
