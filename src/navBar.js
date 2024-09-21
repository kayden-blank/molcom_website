
import "./navBar.css"; // Importing the CSS file
import { Link } from "react-router-dom";
import * as React from "react";


const NavBar = () => {
  
 const [open, setOpen] = React.useState(false);
   const [openServices, setOpenServices] = React.useState(false);


 const handleMouseEnter = () => setOpen(true);
 const handleMouseLeave = () => setOpen(false);
  const handleServicesEnter = () => setOpenServices(true);
  const handleServicesLeave = () => setOpenServices(false);
 
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            src="http://www.molcomconcepts.com/wp-content/uploads/2016/04/Screen-Shot-2016-04-29-at-13.30.16.png"
            alt="Molcom Logo"
          />
        </Link>
      </div>
      <ul className="menu-items">
        {/* <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ position: "relative" }} // Positioning for better control over dropdown
        >
          <button>Dropdown</button>
          {open && (
            <ul className="menu">
              <li className="menu-item">
                <button>Menu 1</button>
              </li>
              <li className="menu-item">
                <button>Menu 2</button>
              </li>
            </ul>
          )}
        </div> */}
        <li>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: "relative" }}
          >
            <Link to="/about-us">About Us</Link>
            {open && (
              <ul className="menu">
                <li className="menu-item">
                  <Link to="/about-us">
                    <button class="hoverButton">About Us</button>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/mission">
                    <button class="hoverButton">Mission & Values</button>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/teams">
                    {" "}
                    <button class="hoverButton">Team</button>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <div
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
            style={{ position: "relative" }}
          >
            <a href="#contact">Services</a>
            {openServices && (
              <div className="services-dropdown">
                <div className="dropdown-column">
                  <h4>Telecom Service</h4>
                  <p> Telecom Infrastructure Services</p>
                  <p>Managed Services</p>
                </div>
                <div className="dropdown-column">
                  <h4>INFORMATION AND COMMUNICATIONS TECHNOLOGY</h4>
                  <Link to="/Fibre">
                    {" "}
                    <p>Fiber Internet Connectivity </p>
                  </Link>
                  <p>SCADA Systems </p>
                </div>
                <div className="dropdown-column">
                  <h4>PROJECT MANAGEMENT</h4>
                  <Link to="/procurement">
                    <p>Procurement</p>
                  </Link>
                </div>
                <div className="dropdown-column">
                  <h4>CONSTRUCTION</h4>
                  <p>Communication Infrastructure Design and Construction </p>
                </div>
                <div className="dropdown-column">
                  <h4>TRAINING AND BUSINESS ADVISORY</h4>
                  <p>Business Consulting</p>
                  <p> Telecommunication Project Training</p>
                </div>
                <div className="dropdown-column">
                  <h4>POWER AND ENERGY</h4>
                  <p>Green and Renewable Energy </p>
                  <p> Solar Energy Services </p>
                  <p>Wind Energy </p>
                  <p> Metering Services (Energy Meters) </p>
                </div>
              </div>
            )}
          </div>
        </li>
        <li>
          <a href="#services">Insight</a>
        </li>
        <li>
          <a href="#contact">Careers</a>
        </li>
        <li>
          <a href="#about">Corporate Responsibility</a>
        </li>
        <li>
          <a
            href="#action"
            className="menu-button"
            style={{ color: "white", marginRight: "40px" }}
          >
            BECOME A CLIENT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
