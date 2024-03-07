import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here using formData
    console.log('Form submitted:', formData);
  };

  return (
    <div id="contact" className="form-1 bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Contact details</h2>
            <p className="p-heading">
              For any type of online project, please don't hesitate to get in touch with me. The fastest way is to send me your message using the following email{' '}
              <a className="blue no-line" href="#your-link">
                xihamid@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control-input"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label className="label-control" htmlFor="name">
                  Name
                </label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control-input"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label className="label-control" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control-textarea"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label className="label-control" htmlFor="message">
                  Project details
                </label>
              </div>
              <div className="form-group">
                <button type="submit" className="form-control-submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
