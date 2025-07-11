import React, { useState } from 'react';
import './Contact.css';
import paperPlane from '/images/plane.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Handle name validation separately
    if (id === 'name') {
      if (/\d/.test(value)) {
        setErrors({ ...errors, name: 'Name should not contain numbers' });
      } else {
        setErrors({ ...errors, name: '' });
      }
    }

    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.name) {
      alert('Please fix the errors before submitting.');
      return;
    }

    // You can handle the valid form data here (e.g. send to backend)
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-wrapper d-flex align-items-center justify-content-center px-3 py-5">
      <div className="container contact-container bg-white rounded-4 shadow-lg p-4 p-md-5">

        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-purple">CONTACT US</h2>
          <p className="text-muted">
            Or reach out manually to <a className='mail' href="mailto:zenvicsoft@gmail.com">zenvicsoft@gmail.com</a>
          </p>
        </div>

        {/* Image + Form */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src={paperPlane} alt="Paper Plane" className="img-fluid contact-image" />
          </div>

          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label"> Email address </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <small className="form-text text-purple">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-purple w-100">Send Message</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
