import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { destinations as allDestinations } from '../../data/destinations';
import './DestinationExplorer.css';

const DestinationExplorer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState(allDestinations);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = allDestinations.filter(destination =>
      destination.name.toLowerCase().includes(query)
    );

    setFilteredDestinations(filtered);
  };

  return (
    <div className="wholebody">
      {/* Simple Navbar without Bootstrap */}
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-brand">Destination Explorer</Link>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/reviews" className="nav-link">Reviews</Link>
            </li>
            <li className="nav-item">
              <Link to="/itinerary" className="nav-link">Itinerary Planner</Link>
            </li>
            <li className="nav-item">
              <Link to="/itineraries" className="nav-link">Existing Itineraries</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4" style={{ backgroundColor: '#e6f7ff' }}>
        <h1 className="mb-4">Escape. Explore. Experience.</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by destination..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="row">
          {filteredDestinations.map((destination, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={`/images/${destination.name.toLowerCase()}.jpg`}
                  className="card-img-top"
                  alt={destination.name}
                />

                <div className="card-body">
                  <h5 className="card-title">{destination.name}</h5>
                  <p className="card-text">Rating: {destination.rating}</p>
                  <p className="card-text">Reviews: {destination.reviews}</p>
                </div>
                <div className="card-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationExplorer;
