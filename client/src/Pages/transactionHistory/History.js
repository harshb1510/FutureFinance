import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import './history.css'; // Import the CSS file

const History = () => {
  const user = localStorage.getItem('token');
  const decodedUser = user ? jwtDecode(user) : null;
  const username = decodedUser ? decodedUser.username : null;

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transaction history data from your backend
    axios
      .get(`http://localhost:8080/api/user/${username}/transactionHistory`)
      .then((response) => {
        setTransactions(response.data.transactions);
      })
      .catch((error) => {
        console.error('Error fetching transaction history:', error);
      });
  }, [username]);

  return (
    <div>
    <h2>Transaction History</h2>
    <div className="transaction-cards">
    {transactions
        ?.slice() // Create a shallow copy of the array
        .reverse().map((transaction, index) => (
        <div key={index} className="transaction-card">
          <h3>Reference Number: {transaction.referenceNumber}</h3>
          <p>Type: {transaction.type}</p>
          <p>Account Number: {transaction.accountNumber}</p>
          <p>Amount: {transaction.amount}</p>
          <p>Date: {transaction.timestamp}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default History;
