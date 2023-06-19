import React, { useState, useEffect } from 'react';

const EditUserModal = ({ user, updateUser, closeModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    if (name.trim() === '' || !isValidEmail(email) || phone.trim() === '') {
      alert('Please enter valid inputs');
      return;
    }

    // Create updated user object
    const updatedUser = {
      id: user.id,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
    };

    // Update user
    updateUser(updatedUser);
    closeModal();
  };

  const isValidEmail = (value) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit">Update User</button>
        <button onClick={closeModal}>Cancel</button>
      </form>
    </div>
  );
};

export default EditUserModal;
