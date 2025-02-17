import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddJob from "./Components/AddJob";
import JobForm from "./Components/JobForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add" element={<AddJob />} />
        <Route path="/edit/:id" element={<JobForm />} />
      </Routes>
    </Router>
  );
}

export default App;
