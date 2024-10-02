import React from 'react';
import Column from './components/column.js';  

const Board = ({ tickets, groupBy, sortBy, users }) => {
  const groupTickets = (tickets, groupBy) => {
    const groupedTickets = {};

    tickets.forEach(ticket => {
      const groupKey = groupBy === 'user'
        ? users.find(user => user.id === ticket.userId)?.name
        : ticket[groupBy];

      if (!groupedTickets[groupKey]) groupedTickets[groupKey] = [];
      groupedTickets[groupKey].push(ticket);
    });

    return groupedTickets;
  };

  const sortedTickets = (tickets, sortBy) => {
    return tickets.sort((a, b) => {
      if (sortBy === 'priority') return b.priority - a.priority;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  };

  const grouped = groupTickets(tickets, groupBy);
  console.log('Rendering Board with tickets:', tickets);

  return (
    <div className="board">
      {Object.keys(grouped).map((group, index) => (
        <Column key={index} title={group} tickets={sortedTickets(grouped[group], sortBy)} />
      ))}
    </div>
  );
};

export default Board;
