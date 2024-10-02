import React from 'react';
import Card from './card.js';

const Column = ({ title, tickets }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      <div className="ticket-list">
        {tickets.map(ticket => {
          return <Card tkt_id={ticket.id} title={ticket.title} description={ticket.tag.join(', ')} userAvatar={ticket.userAvatar} priorityIcon={ticket.priority} taskType={ticket.tag.join(', ')} />
        })}
      </div>
      <style jsx>{`
        .column {
          background-color: #fff;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin: 0 15px;
          flex-grow: 1;
        }

        h2 {
          font-size: 1.5em;
          margin-bottom: 15px;
          color: #007bff;
          border-bottom: 2px solid #007bff;
          padding-bottom: 5px;
        }

        .ticket-list {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default Column;