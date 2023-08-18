import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UsersIndexAdmin from "../Users/UsersIndexAdmin";
import UserEdit from "../Users/UserEdit";

const Admin = () => {
  return (
    <div>
      <div className="Admin-Header">
        <h2>Admin</h2>
        <Link to="/admin/new" className="Admin-New">
          New User
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<UsersIndexAdmin />}/>
        <Route path="/new" element={<UserEdit />} />
        <Route path=":id" element={<UserEdit />} />
      </Routes>
    </div>
  );
};

export default Admin;
