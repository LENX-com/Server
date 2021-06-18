/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../../marketplace/components/layout/Layout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const user = useSelector((state) => state.auth.user);

  const adminLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Admin Links</h4>
        <ul>
          <li>
            <Link to="/create/category" className="nav-link">
              Create category
            </Link>
          </li>

          <li className="list-group">
            <Link to="/create/product"> Create Products</Link>
          </li>

          <li className="list-group">
            <Link to="/admin/orders"> Orders</Link>
          </li>

          <li className="list-group">
            <Link to="/admin/products"> Manage Products</Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className="card">
        <h3 className="card-header">User Information </h3>
        <ul>
          <li className="list-group">{user.name}</li>
          <li className="list-group">{user.email}</li>
          <li className="list-group">
            {user.role === 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      title="Dashboard"
      description={`Good day ${user.name}`}
      className="container"
    >
      <div className="row">
        <div>{adminLinks()}</div>
        <div>{adminInfo()}</div>
      </div>
    </Layout>
  );
}

export default AdminDashboard;
