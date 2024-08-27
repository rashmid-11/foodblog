// CustomerReviews.js
import React from 'react';
import Slider from 'react-slick';
import '../css/CustomerReviews.css'; // For custom CSS
import img1 from '../img/Reviews1.jpg';
import img2 from '../img/Reviews2.jpg';
import img3 from '../img/Reviews3.jpg';
import img4 from '../img/Reviews4.jpg';
import { IoStar } from 'react-icons/io5';

// Sample review data
const reviews = [
  {
    image: img1,
    name: 'John Doe',
    rating: 4,
    comment: 'Amazing food! The flavors were outstanding.',
  },
  {
    image: img2,
    name: 'Jane Smith',
    rating: 5,
    comment: 'The best dining experience I have ever had!',
  },
  {
    image: img3,
    name: 'Alice Johnson',
    rating: 3,
    comment: 'Good food, but the service could be better.',
  },
  {
    image: img4,
    name: 'Bob Brown',
    rating: 4,
    comment: 'Great value for money. Will definitely come back.',
  },
];

function CustomerReviews() {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Change to desired speed (in milliseconds)
    arrows: true, // Show left/right arrows
  };

  return (
    <div id="reviews" className="reviews-container">
      <h2>Customer Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-slide">
          
            <div className="review-text">
            <div className="review-img-container">
              <img src={review.image} alt={review.name} className="review-img" />
            </div>
              <h3>{review.name}</h3>
              <div className="review-rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <IoStar
                    key={i}
                    className="star-icon"
                    style={{ color: i < review.rating ? '#FFEF00' : 'gray' }}
                  />
                ))}
              </div>
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomerReviews;
