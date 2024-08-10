// UsersListingPage.js
import React from 'react';

const UsersListingPage = ({ users, onBanUser, onEditUser }) => {
    const totalUsers = users.length;
    const activeUsers = users.filter(user => user.active_last_24_hours).length;

    const handleEdit = (userId) => {
        const newName = prompt("Enter new name for the user:");
        if (newName) {
            onEditUser(userId, newName);
        }
    };

    return (
        <div className="users-listing-page">
            <div className="container12">
                <div className="kpi-box1">
                    <h1>{totalUsers}</h1>
                    <p>Total Users</p>
                </div>
                <div className="kpi-box3">
                    <h1>{activeUsers}</h1>
                    <p>Users Active in Last 24 Hours</p>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.user_id}>
                            <td>{user.user_id}</td>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleEdit(user.user_id)}>Edit</button>
                                <button onClick={() => onBanUser(user.user_id)}>Ban</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersListingPage;
