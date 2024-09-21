import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './components/User';
import Form from './components/Form';
import TransactionList from './components/TransactionList';
import CurrentUserProvider from './context/CurrentUser';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Error404 from './pages/Error404';

function App() {
  return (
    <CurrentUserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/form" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactionlist" element={<TransactionList />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </CurrentUserProvider>
  );
}

export default App;
