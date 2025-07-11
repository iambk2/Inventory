// Header.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import "./style.css";
import Registration from "../Auth/Registration";
import Login from "../Auth/Login";

const Header = () => {


  // State
  const [activeModal, setActiveModal] = useState(null); // 'login' or 'register'

  // Handle switching
  const handleSwitchModal = (type) => {
    setActiveModal(null); // Close current modal
    setTimeout(() => {
      setActiveModal(type); // Open target modal
    }, 100); // Delay to allow close animation
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            <span style={{ color: "#7F20C5" }}>Zenvic</span>{" "}
            <span className="text-dark">Inventory</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-3 align-items-center">
              {["home", "dashboard", "pricing", "contact"].map((section) => (
                <li key={section} className="nav-item">
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    className="nav-link"
                    activeClass="active-link"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <a
                  onClick={() => setActiveModal('login')}
                  className="btn btn-link btn-signin text-purple fw-semibold"
                >
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => setActiveModal('register')}
                  className="btn btn-purple text-white fw-semibold px-3"
                >
                  Sign Up Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {activeModal === "register" && (
        <Registration
          onClose={() => setActiveModal(null)}
          onSwitchToLogin={() => handleSwitchModal("login")}
        />
      )}

      {activeModal === "login" && (
        <Login
          onClose={() => setActiveModal(null)}
          onSwitchToRegister={() => handleSwitchModal("register")}
        />
      )}
    </>
  );
};

export default Header;
