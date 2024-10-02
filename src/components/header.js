import React from 'react';

const Header = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  return (
    <div className="header">
      <div className="grouping">
        <label>Grouping:</label>
        <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <div className="sorting">
        <label>Sorting:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          padding: 20px 0;
        }

        .grouping, .sorting {
          display: flex;
          align-items: center;
        }

        label {
          margin-right: 10px;
          font-weight: bold;
        }

        select {
          padding: 5px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
      `}</style>
    </div>
  );
};

export default Header; 
