import React, { useEffect } from 'react';
import './css/login.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';


export default function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Blog Page
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
          <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" activeclassname="active" aria-current="page" to="/registration">
                            Registration
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" activeclassname="active" aria-current="page" to="/login">
                            Login
                  </Link>
                </li>
            </ul>
        </div>
      </div>
    </nav>


  )
}