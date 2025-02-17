import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

const JobForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jobData, setJobData] = useState({
    description: "",
    designation: "",
    salary: "",
    location: "",
    userId: 1,
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`https://679d1c1e87618946e6546148.mockapi.io/api/portal/${id}`)
        .then((res) => setJobData(res.data))
        .catch((err) => console.error("Error fetching job details:", err));
    }
  }, [id]);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      await axios.put(`https://679d1c1e87618946e6546148.mockapi.io/api/portal/${id}`, jobData);
    } else {
      await axios.post("https://679d1c1e87618946e6546148.mockapi.io/api/portal", jobData);
    }

    navigate("/");
  };

  return (
    <Container>
      <h3 className="my-3 text-center">{id ? "Edit Job" : "Add New Job"}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            name="designation"
            value={jobData.designation}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={jobData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            name="salary"
            value={jobData.salary}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="success" type="submit">
          {id ? "Update Job" : "Add Job"}
        </Button>
      </Form>
    </Container>
  );
};

export default JobForm;
