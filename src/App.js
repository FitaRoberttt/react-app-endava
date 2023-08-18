import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './Common/Nav';
import Users from './Users/Users';
import UsersIndex from './Users/UsersIndex';
import User from './Users/User';
import Admin from './Admin/Admin';

function App() {

  return (
    <div className="appStyles">
      <Router>
      <div className="containerNav">
        <Nav />
      </div>
        <div className="container">
        <Routes>
          <Route path="/" element={<Users />}>
            <Route path="/" element={<UsersIndex />} />
            <Route path="/:id" element={<User />} />
          </Route>
            <Route path="admin/*" element={<Admin />} />
            <Route path="*" element={<Navigate to ="admin"/> }/>
          
        </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
