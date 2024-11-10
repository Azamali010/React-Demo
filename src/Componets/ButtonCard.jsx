// Card.js
import React from 'react';

const Card = ({ title, description, onLearnMore, onDelete }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-actions">
          <button className="card-button" onClick={onLearnMore}>
            Learn More
          </button>
          <button className="card-button card-button-delete" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
