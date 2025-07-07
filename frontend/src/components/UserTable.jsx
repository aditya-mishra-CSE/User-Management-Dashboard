import React from 'react';
import { Table, Button } from 'react-bootstrap';

export default function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="d-flex justify-content-center">
      <Table striped bordered hover responsive className="mx-auto" style={{ maxWidth: '900px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Hobby</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.first}</td>
              <td>{user.last}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.location}</td>
              <td>{user.hobby}</td>
              <td>
                <Button variant="warning" size="sm" className="me-2" onClick={() => onEdit(user)}>
                  Edit
                </Button>
                <Button variant="danger" size="sm" onClick={() => onDelete(user._id)}>
                  Del
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
