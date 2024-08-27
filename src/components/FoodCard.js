// FoodCard.js
import React from 'react';
import '../css/foodCard.css'; // Add custom CSS if needed

function FoodCard({ image, title, description }) {
  return (
    <div className="food-card">
      <img src={image} alt={title} className="food-card-image" />
      <h3 className="food-card-title">{title}</h3>
      <p className="food-card-description">{description}</p>
    </div>
  );
}

export default FoodCard;
