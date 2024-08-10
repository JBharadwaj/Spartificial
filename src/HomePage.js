// HomePage.js
import React from 'react';

const HomePage = ({ users, posts }) => {
    const totalUsers = users.length;
    const activeUsers = users.filter(user => user.active_last_24_hours).length;
    const totalPosts = posts.length;
    const recentPosts = posts.filter(post => post.created_last_24_hours).length;

    return (
        <div className="home-page">
            <div className="container1">
                <div className="kpi-box1">
                    <h1>{totalUsers}</h1>
                    <p>Total Users</p>
                </div>
                <div className="kpi-box2">
                    <h1>{totalPosts}</h1>
                    <p>Total Posts</p>
                </div>
            </div>
            <div className="container2">
                <div className="kpi-box3">
                    <h1>{activeUsers}</h1>
                    <p>Users Active in Last 24 Hours</p>
                </div>
                <div className="kpi-box4">
                    <h1>{recentPosts}</h1>
                    <p>Posts Published in Last 24 Hours</p>
                </div>
            </div>
            
        </div>
    );
};

export default HomePage;
