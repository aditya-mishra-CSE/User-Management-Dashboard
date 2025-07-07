import React, { useState, useEffect } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';

export default function UserFormModal({ show, handleClose, onSave, initialData }) {
  const emptyUser = {
    first: '',
    last: '',
    email: '',
    phone: '',
    location: '',
    hobby: ''
  };

  const [user, setUser] = useState(emptyUser);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (initialData) {
      setUser(initialData);
    } else {
      setUser(emptyUser);
    }
  }, [initialData]);

  const validate = () => {
    const errs = [];
    if (!user.first.trim()) errs.push('First name is required.');
    if (!user.last.trim()) errs.push('Last name is required.');
    if (!/^\S+@\S+\.\S+$/.test(user.email)) errs.push('Invalid email format.');
    if (!/^\d{10}$/.test(user.phone)) errs.push('Phone number must be exactly 10 digits.');
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (errs.length > 0) {
      setErrors(errs);
    } else {
      setErrors([]);
      onSave(user);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{initialData ? 'Edit User' : 'Add User'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errors.length > 0 && (
          <Alert variant="danger">
            {errors.map((err, idx) => <div key={idx}>{err}</div>)}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>First Name</label>
            <input
              type="text"
              name="first"
              value={user.first}
              onChange={(e) => setUser({ ...user, first: e.target.value })}
              className="form-control"
              required
              placeholder="Enter first name"
            />
          </div>
          <div className="mb-3">
            <label>Last Name</label>
            <input
              type="text"
              name="last"
              value={user.last}
              onChange={(e) => setUser({ ...user, last: e.target.value })}
              className="form-control"
              required
              placeholder="Enter last name"
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="form-control"
              required
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              className="form-control"
              required
              placeholder="Enter 10-digit phone number"
            />
          </div>
          <div className="mb-3">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={user.location}
              onChange={(e) => setUser({ ...user, location: e.target.value })}
              className="form-control"
              placeholder="Enter location (optional)"
            />
          </div>
          <div className="mb-3">
            <label>Hobby</label>
            <input
              type="text"
              name="hobby"
              value={user.hobby}
              onChange={(e) => setUser({ ...user, hobby: e.target.value })}
              className="form-control"
              placeholder="Enter hobby (optional)"
            />
          </div>
          <Button variant={initialData ? 'warning' : 'success'} type="submit">
            {initialData ? 'Update User' : 'Add User'}
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
