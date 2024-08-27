import React from 'react';
import '../css/LocationVisit.css'; // For custom CSS
import hotelImage1 from '../img/hotel1.jpg';
import hotelImage2 from '../img/hotel2.jpg';
import hotelImage3 from '../img/hotel3.jpg';

function LocationVisit() {
  return (
    <div id="location" className="location-container">
      <h2>Visit Us</h2>
      
      <section className="gallery-section">
        <h3>Hotel Photos</h3>
        <div className="gallery">
          <img src={hotelImage1} alt="Hotel 1" className="gallery-item" />
          <img src={hotelImage2} alt="Hotel 2" className="gallery-item" />
          <img src={hotelImage3} alt="Hotel 3" className="gallery-item" />
          {/* Add more photos as needed */}
        </div>
      </section>
      
      <section className="location-info">
        <h3>Location Information</h3>
        <p>Our hotel is located at:</p>
        <address>
          123 Example Street,<br />
          City, Country,<br />
          ZIP Code
        </address>
      </section>
      
      <section className="map-section">
        <h3>Find Us on the Map</h3>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.495755355771!2d-122.41941828468215!3d37.77492927975989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c3d743e8b%3A0x7b5bda51cfc16e36!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1634627813750!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}

export default LocationVisit;
