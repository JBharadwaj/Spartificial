// PostsListingPage.js
import React from 'react';

const PostsListingPage = ({ posts, onDeletePost, onHidePost }) => {
    const totalPosts = posts.length;
    const recentPosts = posts.filter(post => post.created_last_24_hours).length;

    return (
        <div className="posts-listing-page">
            <div className="container21">
                <div className="kpi-box2">
                <h1>{totalPosts}</h1>
                <p>Total Posts</p>
                </div>
                <div className="kpi-box4">
                <h1>{recentPosts}</h1>
                <p>Posts Published in Last 24 Hours</p>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Post ID</th>
                        <th>Caption</th>
                        <th>Media URL</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.post_id} style={{ textDecoration: post.hidden ? 'line-through' : 'none' }}>
                            <td>{post.post_id}</td>
                            <td>{post.caption}</td>
                            <td><a href={post.media_url} target="_blank" rel="noopener noreferrer">{post.media_url}</a></td>
                            <td>
                                <button onClick={() => onDeletePost(post.post_id)}>Delete</button>
                                <button onClick={() => onHidePost(post.post_id)}>{post.hidden ? 'Unhide' : 'Hide'}</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PostsListingPage;
