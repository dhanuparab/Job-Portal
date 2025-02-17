import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./../Components/NavBar";
import axios from "axios";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const navigate = useNavigate();

  const currentUserId = 1;

  useEffect(() => {
    axios
      .get("https://679d1c1e87618946e6546148.mockapi.io/api/portal")
      .then((response) => {
        setJobs(response.data.reverse());
        setFilteredJobs(response.data);
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = jobs.filter((job) =>
        job.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const handleDelete = async (id) => {
   
    try {
      await axios.delete(`https://679d1c1e87618946e6546148.mockapi.io/api/portal/${id}`);
      setJobs(jobs.filter((job) => job.id !== id));
      setFilteredJobs(filteredJobs.filter((job) => job.id !== id));
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <div className="container mt-3">
        <h2 className="text-center" style={{ margin: '30px' }}>Latest Job Listings</h2>
        <div className="row">
          {filteredJobs.map((job) => (
            <div key={job.id} className="col-md-4 mb-3">
              <div className="card p-3 shadow-sm">
                <h5><strong>Designation: </strong> {job.designation}</h5>
                <p><strong>Description:</strong> {job.description}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Salary:</strong> Rs.{job.salary}</p>

                {job.userId === currentUserId && (
                  <div className="d-flex-3 justify-content-start">
                    <button className="btn btn-sm btn-primary me-2 px-3" onClick={() => navigate(`/edit/${job.id}`)}>
                      Edit
                    </button>
                    <button className="btn btn-sm btn-danger px-3" onClick={() => handleDelete(job.id, job.userId)}>
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
