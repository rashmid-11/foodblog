// VideoSection.js
import React from 'react';
import CardPage from './CardPage';
import CustomerReviews from './CustomerReviews';
import LocationVisit from './LocationVisit';


function VideoSection() {
  return (
    <div>
      <section id="home">
        <video width="100%" height="auto" autoPlay loop muted>
          <source src={require('../video/homevd.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section id="cards">
        <CardPage />
      </section>
      <section id="reviews">
        <CustomerReviews />
      </section>
      <section id="location">
        <LocationVisit />
      </section>
    </div>
  );
}

export default VideoSection;
