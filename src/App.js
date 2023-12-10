// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DestinationExplorer from './components/DestinationExplorer/DestinationExplorer';
import ReviewSystem from './components/ReviewSystem/ReviewSystem';
import ItineraryPlanner from './components/ItineraryPlanner/ItineraryPlanner';
import ExistingItineraries from './components/ExistingItineraries/ExistingItineraries';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DestinationExplorer />} />
        <Route path="/reviews" element={<ReviewSystem />} />
        <Route path="/itinerary" element={<ItineraryPlanner />} />
        <Route path="/itineraries" element={<ExistingItineraries />} />
      </Routes>
    </Router>
  );
}

export default App;



// ============================
