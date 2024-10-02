import React, { useEffect, useState } from 'react';
import Header from './components/header.js'; 
import Board from './board.js';   

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment ')
      .then(response => response.json())
      .then(data => {

        console.log('showing data',data);
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="kanban-board">
      <Header groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy} />
      <Board tickets={tickets} groupBy={groupBy} sortBy={sortBy} users={users} />

      <style jsx>{`
        .kanban-board {
          font-family: 'Arial', sans-serif;
          background-color: #f4f7fb;
          padding: 20px;
          min-height: 100vh;
        }
      `}</style>

    </div>
  );
};

export default App;
