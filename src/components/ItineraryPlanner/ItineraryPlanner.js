import React, { useState } from 'react';
import { destinations } from '../../data/destinations';

const ItineraryPlanner = () => {
  const [newItinerary, setNewItinerary] = useState({
    name: '',
    date: '',
    destinations: [],
  });

  const [availableDestinations, setAvailableDestinations] = useState(destinations);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItinerary((prevItinerary) => ({
      ...prevItinerary,
      [name]: value,
    }));
  };

  const addDestinationToItinerary = (destination) => {
    setNewItinerary((prevItinerary) => ({
      ...prevItinerary,
      destinations: [...prevItinerary.destinations, destination],
    }));
  };

  const handleCreateItinerary = (e) => {
    e.preventDefault();
    console.log('New Itinerary:', newItinerary);
  };

  return (
    <div>
      <div className="card mt-4">
        <div className="card-body">
          <h2 className="card-title">Itinerary</h2>
          <div className="row">
            {newItinerary.destinations.map((destination, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={`/images/${destination.name.toLowerCase()}.jpg`}
                    className="card-img-top"
                    alt={destination.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{destination.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <h2 className="card-title">Available Destinations</h2>
          <div className="row">
            {availableDestinations.map((destination, index) => (
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
                    <button
                      type="button"
                      onClick={() => addDestinationToItinerary(destination)}
                      className="btn btn-primary btn-sm mt-2"
                    >
                      Add to Itinerary
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleCreateItinerary} className="mt-4">
        <h2>Create New Itinerary</h2>
        <div className="mb-3">
          <label htmlFor="itineraryName" className="form-label">
            Itinerary Name
          </label>
          <input
            type="text"
            className="form-control"
            id="itineraryName"
            name="name"
            value={newItinerary.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">
            Start Date
          </label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            name="date"
            value={newItinerary.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Itinerary
        </button>
      </form>
    </div>
  );
};

export default ItineraryPlanner;
