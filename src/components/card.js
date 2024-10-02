import React from 'react';
import '../styling.css';

const Card = ({ tkt_id, title, description, userAvatar, priorityIcon, taskType }) => {
    return (
        <div className="ticket-card">
            <h6 className="ticketShow">{tkt_id}</h6>
            <div className='title-avatar'>
               
                <div className="card-title">{title}</div>

                <div className="card-avatar">
                    <img src={userAvatar} alt="" className="avatar-image" />
                </div>

            </div>

            <div className="card-description">{description}</div>
            <style jsx>{`
        .ticket-card {
          background-color: white;
          border-radius: 10px;
          padding: 15px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
          margin-bottom: 15px;
        }

        .ticket-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .title-avatar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-title {
          font-size: 1.1em;
          font-weight: bold;
        }

        .avatar-image {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .card-description {
          margin-top: 10px;
          color: #666;
        }
      `}</style>
        </div>
    );
};

export default Card;
