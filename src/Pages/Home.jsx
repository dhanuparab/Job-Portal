import React, { useEffect, useState } from 'react'
import JobList from '../Components/JobList'

function Home() {
    const [jobs,setJobs]= useState([])

    useEffect(() => {
        fetch("https://679d1c1e87618946e6546148.mockapi.io/api/portal")
          .then((res) => res.json())
          .then((data) => setJobs(data))
          .catch((err) => console.error(err));
      }, []);
    
      // Delete Job
      const deleteJob = async (id) => {
        await fetch(`https://679d1c1e87618946e6546148.mockapi.io/api/portal/${id}`, { method: "DELETE" });
        setJobs(jobs.filter((job) => job.id !== id));
      };

  return (
    <div>
      <h1>Job Portal</h1>
      <JobList jobs={jobs} deleteJob={deleteJob}/>
    </div>
  )
}

export default Home
