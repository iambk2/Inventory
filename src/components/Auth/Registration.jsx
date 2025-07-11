import React from "react";
import "./Registration.css";
import { toast } from "react-toastify";

const Registration = ({ onClose, onSwitchToLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: Add more validation or API call
    toast.success("Registered Successfully!", {
      style: {
        backgroundColor: "#E4CEF1",
        color: "#000",
      },
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h3 className="text-center mb-3">Create an Account</h3>
        <form onSubmit={handleSubmit} className="registration-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input
            type="password"
            placeholder="Password"
            required
            minLength={4}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            minLength={4}
          />
          <button
            type="submit"
            className="btn btn-purple w-100 mt-3 text-white"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <button
            className="text-purple btn btn-link p-0"
            onClick={onSwitchToLogin}
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Registration;
