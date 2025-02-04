import React from 'react'
import { Link } from 'react-router-dom'

const JobList = ({jobs,deleteJob})=> {
  return (
    <div>
      <h2>Job Listing</h2>
      <Link to='/add'>
        <button>Add Job</button>
      </Link>
      <ul>
        {jobs.map((job)=>(
        <li key={job.id}>
            <strong>{job.designation}</strong>-{job.description}-{job.location}-${job.salary}
            <Link to={`/edit/${job.id}`}>
            <button>Edit</button>
            </Link>
            <button onClick={()=>deleteJob(job.id)}>Delete</button>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default JobList
