import React from "react";
import { Link } from "react-router-dom";
import pplogo from "../../assets/images/pplogo.png";
import "./Footer.css"; // Ensure custom styles are loaded

export default function Footer() {
  return (
    <footer className="footer">
      {/* Column 1 */}
      <div className="col logo-div">
        <a href="index.html">
          <img src={pplogo} alt="footer-logo" className="footerLogo" />
        </a>
        <p className="copyright">
          &#169; Peak Performance Gym Company, Inc 2024.
        </p>
      </div>

      {/* Column 2 */}
      <div className="col">
        <h5>Learn More</h5>
        <ul className="footerList">
          <li>Classes</li>
          <li>Our Staff</li>
          <li>
            <Link to="/Membership" className="link">
              Memberships
            </Link>
          </li>
          <li>
            <Link to="/Oasis" className="link">
              Locations
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 4 */}
      <div className="col">
        <h5>Contact Us</h5>
        <ul className="footerList">
          <li>Phone: (555) 789-0123</li>
          <li>Email: admin@ppgyms.com</li>
        </ul>
      </div>

      {/* Column 5 */}
      <div className="col">
        <h5>Our Company</h5>
        <ul className="footerList">
          <li>About Peak Performance Gyms</li>
          <li>Careers</li>
          <li>
            <Link to="/Contact" className="link">
              Message Us!
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
