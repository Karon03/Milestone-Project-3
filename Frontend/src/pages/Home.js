import React from 'react';
import { Link } from 'react-router-dom';
// import '../Dakota-Frontend/landing.css'
// Need to import our styles so we can delete all this below
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#9c88ff'// Example background color
  },
  buttons: {
    margin: '20px 0',
  },
  button: {
    textDecoration: 'none',
    padding: '10px 20px',
    color: '#fff',
    backgroundColor: '#007bff',
    borderRadius: '5px',
    margin: '5px',
    fontSize: '16px',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Expense Tracker App</h1>
      <p>Track your income and expenses effortlessly.</p>
      
      <div style={styles.buttons}>
        <Link to="/login" style={styles.button}>
          Log In
        </Link>
        <Link to="/signup" style={styles.button}>
          Sign Up
        </Link>
      </div>

      <p>Already have an account? <Link to="/login">Log in here</Link></p>
    </div>
  );
};

export default Home;