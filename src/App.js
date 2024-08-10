import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Sidebar from './Sidebar';
import HomePage from './HomePage';
import UsersListingPage from './UserListingPage';
import PostsListingPage from './PostsListingPage';
const App = () => {
  const [users, setUsers] = useState([
    {"user_id": 1, "username": "user1", "name": "John Doe", "email": "john.doe@example.com", "active_last_24_hours": true},
    {"user_id": 2, "username": "user2", "name": "Jane Smith", "email": "jane.smith@example.com", "active_last_24_hours": true},
    {"user_id": 3, "username": "user3", "name": "Michael Johnson", "email": "michael.johnson@example.com", "active_last_24_hours": false},
    {"user_id": 4, "username": "user4", "name": "Emily Brown", "email": "emily.brown@example.com", "active_last_24_hours": true},
    {"user_id": 5, "username": "user5", "name": "William Wilson", "email": "william.wilson@example.com", "active_last_24_hours": true},
    {"user_id": 6, "username": "user6", "name": "Sophia Lee", "email": "sophia.lee@example.com", "active_last_24_hours": false},
    {"user_id": 7, "username": "user7", "name": "James Martinez", "email": "james.martinez@example.com", "active_last_24_hours": false},
    {"user_id": 8, "username": "user8", "name": "Olivia Garcia", "email": "olivia.garcia@example.com", "active_last_24_hours": true},
    {"user_id": 9, "username": "user9", "name": "Daniel Robinson", "email": "daniel.robinson@example.com", "active_last_24_hours": true},
    {"user_id": 10, "username": "user10", "name": "Emma Taylor", "email": "emma.taylor@example.com", "active_last_24_hours": false},
    {"user_id": 11, "username": "user11", "name": "Alexander Clark", "email": "alexander.clark@example.com", "active_last_24_hours": false},
    {"user_id": 12, "username": "user12", "name": "Mia Lewis", "email": "mia.lewis@example.com", "active_last_24_hours": true},
    {"user_id": 13, "username": "user13", "name": "David Hall", "email": "david.hall@example.com", "active_last_24_hours": false},
    {"user_id": 14, "username": "user14", "name": "Ava Allen", "email": "ava.allen@example.com", "active_last_24_hours": true},
    {"user_id": 15, "username": "user15", "name": "Ethan Scott", "email": "ethan.scott@example.com", "active_last_24_hours": true},
    {"user_id": 16, "username": "user16", "name": "Isabella Green", "email": "isabella.green@example.com", "active_last_24_hours": true},
    {"user_id": 17, "username": "user17", "name": "Liam Adams", "email": "liam.adams@example.com", "active_last_24_hours": false},
    {"user_id": 18, "username": "user18", "name": "Chloe Baker", "email": "chloe.baker@example.com", "active_last_24_hours": false},
    {"user_id": 19, "username": "user19", "name": "Noah King", "email": "noah.king@example.com", "active_last_24_hours": true},
    {"user_id": 20, "username": "user20", "name": "Grace Wright", "email": "grace.wright@example.com", "active_last_24_hours": true}
]);

const [posts, setPosts] = useState([
  {"post_id": 1, "user_id": 1, "caption": "First post", "media_url": "https://example.com/post1.jpg", "created_last_24_hours": true},
  {"post_id": 2, "user_id": 2, "caption": "Beautiful sunset", "media_url": "https://example.com/post2.jpg", "created_last_24_hours": false},
  {"post_id": 3, "user_id": 3, "caption": "Coffee time", "media_url": "https://example.com/post3.jpg", "created_last_24_hours": false},
  {"post_id": 4, "user_id": 4, "caption": "Fun with friends", "media_url": "https://example.com/post4.jpg", "created_last_24_hours": true},
  {"post_id": 5, "user_id": 5, "caption": "Travel adventures", "media_url": "https://example.com/post5.jpg", "created_last_24_hours": true},
  {"post_id": 6, "user_id": 6, "caption": "Gourmet delights", "media_url": "https://example.com/post6.jpg", "created_last_24_hours": false},
  {"post_id": 7, "user_id": 7, "caption": "New hobby", "media_url": "https://example.com/post7.jpg", "created_last_24_hours": true},
  {"post_id": 8, "user_id": 8, "caption": "Morning vibes", "media_url": "https://example.com/post8.jpg", "created_last_24_hours": false},
  {"post_id": 9, "user_id": 9, "caption": "Fitness journey", "media_url": "https://example.com/post9.jpg", "created_last_24_hours": true},
  {"post_id": 10, "user_id": 10, "caption": "City lights", "media_url": "https://example.com/post10.jpg", "created_last_24_hours": false},
  {"post_id": 11, "user_id": 11, "caption": "Nature's beauty", "media_url": "https://example.com/post11.jpg", "created_last_24_hours": true},
  {"post_id": 12, "user_id": 12, "caption": "Family time", "media_url": "https://example.com/post12.jpg", "created_last_24_hours": false},
  {"post_id": 13, "user_id": 13, "caption": "Artistic expression", "media_url": "https://example.com/post13.jpg", "created_last_24_hours": false},
  {"post_id": 14, "user_id": 14, "caption": "Music vibes", "media_url": "https://example.com/post14.jpg", "created_last_24_hours": false},
  {"post_id": 15, "user_id": 15, "caption": "Exciting adventure", "media_url": "https://example.com/post15.jpg", "created_last_24_hours": true},
  {"post_id": 16, "user_id": 16, "caption": "Summer days", "media_url": "https://example.com/post16.jpg", "created_last_24_hours": true},
  {"post_id": 17, "user_id": 17, "caption": "Pets love", "media_url": "https://example.com/post17.jpg", "created_last_24_hours": false},
  {"post_id": 18, "user_id": 18, "caption": "Learning new things", "media_url": "https://example.com/post18.jpg", "created_last_24_hours": false},
  {"post_id": 19, "user_id": 19, "caption": "Celebration time", "media_url": "https://example.com/post19.jpg", "created_last_24_hours": true},
  {"post_id": 20, "user_id": 20, "caption": "Winter wonderland", "media_url": "https://example.com/post20.jpg", "created_last_24_hours": true}
]);

const handleBanUser = (userId) => {
    setUsers(users.filter(user => user.user_id !== userId));
};

const handleEditUser = (userId, newName) => {
    setUsers(users.map(user => user.user_id === userId ? { ...user, name: newName } : user));
};

const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.post_id !== postId));
};

const handleHidePost = (postId) => {
    setPosts(posts.map(post =>
        post.post_id === postId ? { ...post, hidden: !post.hidden } : post
    ));
};
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<HomePage users={users} posts={posts} />}/> 
            <Route path="/user-listing" element={<UsersListingPage 
                users={users} 
                onBanUser={handleBanUser} 
                onEditUser={handleEditUser} 
            />}/>
            <Route path="/post-listing" element={<PostsListingPage 
                posts={posts} 
                onDeletePost={handleDeletePost} 
                onHidePost={handleHidePost} 
            />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
