// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './components/User';
import Form from './components/Form';
import TransactionList from './components/TransactionList';
import CurrentUser from './context/CurrentUser';
import Signup from './pages/Signup';
import Error404 from './pages/Error404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/transactionlist" element={<TransactionList/>} />
        <Route path="/currentuser" element={<CurrentUser/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/"element={Error404} />
{/* possibly need a navigation.js similar to rest-rant
 */}
      
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
