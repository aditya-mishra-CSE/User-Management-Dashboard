import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';

export default function UserForm({ onSubmit, initialData, isEditing, onCancel }) {
  const emptyUser = {
    first: '',
    last: '',
    email: '',
    phone: '',
    location: '',
    hobby: ''
  };

  const [user, setUser] = useState(emptyUser);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setUser(initialData || emptyUser);
    setErrors({});
  }, [initialData]);

  const validate = () => {
    const newErrors = {};

    if (!user.first.trim()) newErrors.first = 'First name is required';
    if (!user.last.trim()) newErrors.last = 'Last name is required';
    if (!user.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!user.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(user.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    onSubmit(user);
  };

  return (
    <Card className="mt-4 shadow">
      <Card.Header className="bg-primary text-white">
        {isEditing ? 'Edit User' : 'Add New User'}
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>

          {Object.keys(errors).length > 0 && (
            <Alert variant="danger">
              Please fix the following errors:
              <ul className="mb-0">
                {Object.entries(errors).map(([field, msg]) => (
                  <li key={field}>{msg}</li>
                ))}
              </ul>
            </Alert>
          )}

          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="first"
              value={user.first}
              onChange={handleChange}
              isInvalid={!!errors.first}
              placeholder="Enter first name"
            />
            <Form.Control.Feedback type="invalid">{errors.first}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="last"
              value={user.last}
              onChange={handleChange}
              isInvalid={!!errors.last}
              placeholder="Enter last name"
            />
            <Form.Control.Feedback type="invalid">{errors.last}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              placeholder="Enter email"
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name="phone"
              value={user.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
              placeholder="Enter 10-digit phone number"
            />
            <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              name="location"
              value={user.location}
              onChange={handleChange}
              placeholder="Enter location"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Hobby</Form.Label>
            <Form.Control
              name="hobby"
              value={user.hobby}
              onChange={handleChange}
              placeholder="Enter hobby"
            />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Button variant={isEditing ? "warning" : "success"} type="submit">
              {isEditing ? 'Update' : 'Add User'}
            </Button>
            {isEditing && (
              <Button variant="secondary" onClick={onCancel}>
                Cancel
              </Button>
            )}
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
