// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';
import EditUserModal from './Components/EditUserModal';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const addUser = (newUser) => {
    // Generate unique id for the user
    const id = Date.now().toString();

    // Add id to the new user object
    newUser.id = id;

    // Add new user to the users array
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    // Filter out the user with the specified id
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const openEditModal = (userId) => {
    // Find the user with the specified id
    const userToEdit = users.find((user) => user.id === userId);
    setEditUser(userToEdit);
  };

  const updateUser = (updatedUser) => {
    // Find the index of the user with the specified id
    const userIndex = users.findIndex((user) => user.id === updatedUser.id);

    // Create a new array of users with the updated user
    const updatedUsers = [...users];
    updatedUsers[userIndex] = updatedUser;

    // Update the users array
    setUsers(updatedUsers);
  };

  const closeModal = () => {
    setEditUser(null);
  };

  return (
    <div>
      <h1>User Management Application</h1>
      <UserForm addUser={addUser} />
      <UserList
        users={users}
        deleteUser={deleteUser}
        editUser={openEditModal}
      />
      {editUser && (
        <EditUserModal
          user={editUser}
          updateUser={updateUser}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;
