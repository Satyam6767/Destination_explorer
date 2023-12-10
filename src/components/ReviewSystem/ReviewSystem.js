// src/components/ReviewSystem/ReviewSystem.js
import React from 'react';
import { reviews } from '../../data/reviews';
import './ReviewSystem.css';

const ReviewSystem = () => {
  return (
    <div>
      <h1>Review System</h1>
      <ul className="review-list">
        {reviews.map((review, index) => (
          <li key={index} className="review-item">
            <h3>{review.destination}</h3>
            <p>Rating: {review.rating}</p>
            <p>Review: {review.review}</p>
            <p>User: {review.user}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewSystem;
