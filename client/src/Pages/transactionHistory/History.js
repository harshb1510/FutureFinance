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
    <div className="history-container">
      <h2>Transaction History</h2>
      <div className="history-cards">
      {transactions
        ?.slice()
        .reverse() 
        .map((transaction) => (
          <div key={transaction._id} className="history-card">
            <div className="card-header">
              <span className="type">{transaction.type}</span>
              <span className="amount">Rs. {transaction.amount}</span>
            </div>
            <div className="card-footer">
              <span className="date">
                {new Date(transaction.timestamp).toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
