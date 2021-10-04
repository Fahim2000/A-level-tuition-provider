import React from "react";
import { Link } from "react-router-dom";
// creating header components
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <span className="me-4 fw-bold fs-4 text-success">
            A Level tuition provider
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/courses" className="nav-link active">
                  All Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link active">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faqs" className="nav-link active">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
