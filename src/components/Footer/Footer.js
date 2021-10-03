import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer mt-3">
      <h1 className="text-info">
        Connect <i className="fab fa-youtube ms-2"></i>
        <i className="fab fa-facebook-square ms-2"></i>
        <i className="fab fa-twitter ms-2"></i>
      </h1>
      <p className="lead text-info">
        All rights reserved &copy; by A-level tuition provider{" "}
      </p>
    </footer>
  );
};

export default Footer;
