import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = () => {
  return (
    <aside className="side-bar sidebar-dark-primary elevation-10">
      <Link to="/" className="brand-link">
        <span className="brand-text font-weight-light">Admin Panel</span>
      </Link>
      <div className="sidebar">
        <nav className="mt-3">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="nav-icon fas fa-users"></i>
                <p>Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user-listing" className="nav-link">
                <i className="nav-icon fas fa-user-plus"></i>
                <p>User Listing</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/post-listing" className="nav-link">
                <i className="nav-icon fas fa-user-plus"></i>
                <p>Post Listing</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
