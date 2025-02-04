import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const JobForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  const [jobData, setJobData] = useState({ description: "", designation: "", salary: "", location: "" });

  useEffect(() => {
    if (isEditing) {
      fetch(`http://localhost:5000/jobs/${id}`)
        .then((res) => res.json())
        .then((data) => setJobData(data));
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await fetch(`https://679d1c1e87618946e6546148.mockapi.io/api/portal/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      });
    } else {
      await fetch("https://679d1c1e87618946e6546148.mockapi.io/api/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...jobData, id: Date.now().toString() }),
      });
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="description" placeholder="Description" value={jobData.description} onChange={handleChange} required />
      <input type="text" name="designation" placeholder="Designation" value={jobData.designation} onChange={handleChange} required />
      <input type="number" name="salary" placeholder="Salary" value={jobData.salary} onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" value={jobData.location} onChange={handleChange} required />
      <button type="submit">{isEditing ? "Update" : "Add"} Job</button>
    </form>
  );
};

export default JobForm;
