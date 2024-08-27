// Navbar.js
import React from 'react';
import '../css/navbar.css'; // Custom CSS for additional styling

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cards">Food Cards</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#reviews">Reviews</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#location">Visit Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
