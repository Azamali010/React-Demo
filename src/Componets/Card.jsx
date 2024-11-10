// Card.js
import React from "react";

const Card = ({ title, description, imsage }) => {
  return (
    <div className="card">
      <img
        src="https://images.pexels.com/photos/17798437/pexels-photo-17798437/free-photo-of-house-between-forest-and-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt={title}
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
