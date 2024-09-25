import React, { useState, useEffect, useContext } from 'react';
import { CurrentUser } from '../context/CurrentUser';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { currentUser } = useContext(CurrentUser);
  const [accountId, setAccountId] = useState(undefined);
  const [income, setIncome] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionsList, setTransactionsList] = useState([]);  // Initialize as an empty array
  const navigate = useNavigate();

  // Set accountId when currentUser changes
  useEffect(() => {
    if (currentUser && currentUser.account_id) {
      
      setAccountId(currentUser.account_id);
    }
  }, [currentUser, accountId]);

  // Fetch transactions from the backend 
  // fetch token before making the call 
  useEffect(() => {
    const fetchTransactions = async () => {
      if (!currentUser) {
        console.error('User not logged in');
        return;
      }
     
      try {
        // need to pass bearer token with url
        const response = await fetch(`/api/transactions/account/${accountId}`);
        const data = await response.json();
        // Ensure that the data is an array before setting state
        if (Array.isArray(data)) {
          setTransactionsList(data);
        } else {
          console.error("Expected array, but got:", data);
        }
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    if (accountId) {
      fetchTransactions();
    }
  }, [accountId, currentUser]);

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleTransactionChange = (e) => {
    setTransactionAmount(e.target.value);
  };

  // Handle adding a new transaction
  const handleAddTransaction = async (e) => {
    e.preventDefault();

    if (transactionAmount) {
      try {
        const response = await fetch('/api/transactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            account_id: accountId, // Include accountId to associate the transaction
            type: 'expense', // Assuming you're adding an expense; can be dynamic
            category: 'General', // Can be dynamic based on user input
            amount: parseFloat(transactionAmount), // Ensure it's a float
            date: new Date().toISOString(), // Set the current date
          }),
        });
        if (response.ok) {
          const newTransaction = await response.json();
          setTransactionsList((prev) => [...prev, newTransaction]); // Add new transaction to the list
          setTransactionAmount(''); // Reset input field
        } else {
          console.error('Error adding transaction', e);
        }
      } catch (error) {
        console.error('Error adding transaction:', error);
      }
    }
  };

  return (
    (currentUser) ? (
    <div className="card">
      <h2>Dashboard</h2>
      <div>
        <h3>Input Your Income</h3>
        <input
          type="number"
          value={income}
          onChange={handleIncomeChange}
          placeholder="Enter your income here"
        />
      </div>

      <div>
        <h3>Log Your Transactions</h3>
        <form onSubmit={handleAddTransaction}>
          <input
            type="number"
            value={transactionAmount}
            onChange={handleTransactionChange}
            placeholder="Enter a transaction amount"
            required
          />
          <button type="submit">Add Transaction</button>
        </form>
      </div>

      <h4>Transactions List</h4>
      <ul>
        {/* Check if transactionsList is an array before mapping */}
        {Array.isArray(transactionsList) && transactionsList.length > 0 ? (
          transactionsList.map((tran) => (
            <li key={tran.transaction_id}>
              ${tran.amount.toFixed(2)} - {tran.category} ({tran.type})
            </li>
          ))
        ) : (
          <p>No transactions found.</p>
        )}
      </ul>
    </div>
  ) : (
    <div>
      <h2>Dashboard</h2>
      <p>Please login to view your dashboard.</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
    </div>
    ) 
  );
};

export default Dashboard;