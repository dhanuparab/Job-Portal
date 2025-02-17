import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/job-portal.png';
import { Nav, Navbar, NavbarCollapse } from 'react-bootstrap';

const NavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-primary p-3">
      <Nav className="container-fluid">
        <Link className="navbar-brand text-white  " to="/">
          <img src={logo} height={30} width={40} alt="Logo" className="me-2" />
          <strong>Jobs Portal</strong>
        </Link>

          <div className="collapse navbar-collapse" id="navbarNav">

          <div className="mx-auto w-50 ms-5">
            <input
              type="text"
              className="form-control"
              placeholder="Search Jobs..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <NavbarCollapse className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto  ">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Add">Add Job</Link>
              </li>
            </ul>
          </NavbarCollapse>
        </div>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
