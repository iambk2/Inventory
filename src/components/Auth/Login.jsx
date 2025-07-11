import React from 'react';
import './Registration.css'; 
import { toast } from 'react-toastify';


const Login = ({ onClose, onSwitchToRegister }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Login Success!', {
        style: {
            backgroundColor:  '#E4CEF1',
            color: '#000',
        },
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h3 className="text-center mb-3">Login to Your Account</h3>
        <form onSubmit={handleSubmit} className="registration-form">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required minLength={4} />
          <button type="submit" className="btn btn-purple w-100 mt-3 text-white">Login</button>
        </form>
        <p className="text-center mt-3">
          Don’t have an account?{' '}
          <button className="text-purple btn btn-link p-0" onClick={onSwitchToRegister}>
            Sign up now
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
