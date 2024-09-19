// import React, { useState } from 'react';

// const Signup = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         if (password !== confirmPassword) {
//             setError('Passwords do not match.');
//             return;
//           }
//  const userData = {
//         username,
//         email,
//         password
//         };
//         try {
//             // Example fetch call to backend for signup
//             const response = await fetch('http://localhost:5000/api/signup', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify(userData)
//             });