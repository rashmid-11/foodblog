import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import VideoSection from './components/VideoSection';
// In index.js or App.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
       
          <VideoSection />
       
      </div>
    </Router>
  );
}

export default App;
