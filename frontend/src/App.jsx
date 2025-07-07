import React, { useEffect, useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import UserTable from './components/UserTable.jsx';
import UserFormModal from './components/UserFormModal.jsx';
import axios from 'axios';
import { CSVLink } from 'react-csv';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users`);
      setUsers(res.data);
    } catch (err) {
      setError('Error fetching users from server.');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAdd = () => {
    setEditingUser(null);
    setShowModal(true);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete?')) return;
    try {
      await axios.delete(`${BASE_URL}/users/${id}`);
      fetchUsers();
    } catch (err) {
      setError('Error deleting user.');
    }
  };

  const handleSave = async (user) => {
    try {
      if (editingUser) {
        await axios.put(`${BASE_URL}/users/${editingUser._id}`, user);
      } else {
        await axios.post(`${BASE_URL}/users`, user);
      }
      setShowModal(false);
      fetchUsers();
    } catch (err) {
      setError('Error saving user. Please check server.');
    }
  };

  return (
    <Container className="my-4">
      <h2>CRUD Database</h2>
      {error && <Alert variant="danger">{error}</Alert>}

      <div className="mb-3">
        <Button variant="success" onClick={handleAdd} className="me-2">
          Add User
        </Button>
        <CSVLink data={users} filename={"users.csv"} className="btn btn-primary">
          Download CSV
        </CSVLink>
      </div>

      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />

      <UserFormModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        onSave={handleSave}
        initialData={editingUser}
      />
    </Container>
  );
}
