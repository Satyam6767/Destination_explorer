// src/components/ExistingItineraries/ExistingItineraries.js
import React, { useState } from 'react';
import { itineraries as allItineraries } from '../../data/itineraries';

const ExistingItineraries = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [itineraries, setItineraries] = useState(allItineraries);
  const [filteredItineraries, setFilteredItineraries] = useState(allItineraries);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = itineraries.filter(itinerary =>
      itinerary.name.toLowerCase().includes(query)
    );

    setFilteredItineraries(filtered);
  };

  const handleDelete = (id) => {
    // Filter out the itinerary with the given id
    const updatedItineraries = itineraries.filter(itinerary => itinerary.id !== id);

    // Update the state with the filtered itineraries
    setItineraries(updatedItineraries);
    setFilteredItineraries(updatedItineraries);

    console.log(`Deleting itinerary with id ${id}`);
  };

  return (
    <div className="container-fluid bg-info">
      <div className="container">
        <h1 className="mt-3 mb-4 display-4 text-center bg-primary text-white p-3">Existing Itineraries</h1>

        <input
          type="text"
          placeholder="Search itineraries..."
          value={searchQuery}
          onChange={handleSearch}
          className="form-control mt-3 mb-3"
        />
        <div className="row">
          {filteredItineraries.map((itinerary) => (
            <div key={itinerary.id} className="col-md-4 mb-4">
              <div className="card">
                {/* Replace the image path with the actual path to your images */}
                <img
                  src={`/images/${itinerary.name.toLowerCase()}.jpg`}
                  className="card-img-top"
                  alt={itinerary.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{itinerary.name}</h5>
                  <p className="card-text">Rating: {itinerary.rating}</p>
                  <p className="card-text">Reviews: {itinerary.reviews}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{itinerary.name}</strong> - Rating: {itinerary.rating}, Reviews: {itinerary.reviews}
                  </div>
                  <div>
                    <button
                      onClick={() => handleDelete(itinerary.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExistingItineraries;
