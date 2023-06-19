import React from 'react';

const UserList = ({ users, deleteUser, editUser }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <button onClick={() => editUser(user.id)}>Edit</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
