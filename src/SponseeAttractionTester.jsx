// src/components/SponseeAttractionTester.js
import React, { useState } from 'react';

const SponseeAttractionTester = () => {
  const [message, setMessage] = useState('');
  const [attractionId, setAttractionId] = useState('');
  const [sponseeOrgIdForNew, setSponseeOrgIdForNew] = useState('your-sponsee-org-id'); // Replace with a valid ID for testing creation
  // const [sponseeOrgIdForList, setSponseeOrgIdForList] = useState('your-sponsee-org-id'); // Replace with a valid ID for listing

  const handleCreateAttraction = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/sponseeattractions/${attractionId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include your authorization token if needed
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          name: 'Test Attraction',
          location: 'Test Location',
          bio: 'A test attraction',
          photos: ['photo1.jpg'],
          // Add other fields as needed for your testing
          sponseeOrgId: sponseeOrgIdForNew, // Ensure sponseeOrgId is sent
        }),
      });
      const data = await response.json();
      setMessage(`Create Attraction Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setMessage(`Create Attraction Error: ${error.message}`);
    }
  };

  const handleGetAttraction = async () => {
    if (!attractionId) {
      setMessage('Please enter an Attraction ID to get.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/api/sponseeattractions/${attractionId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include your authorization token if needed
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setMessage(`Get Attraction Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setMessage(`Get Attraction Error: ${error.message}`);
    }
  };

  const handleGetAllAttractions = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/sponseeattractions/${attractionId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include your authorization token if needed
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setMessage(`Get All Attractions Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setMessage(`Get All Attractions Error: ${error.message}`);
    }
  };

  const handleUpdateAttraction = async () => {
    if (!attractionId) {
      setMessage('Please enter an Attraction ID to update.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/api/sponseeattractions/${attractionId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Include your authorization token if needed
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          name: 'Updated Test Attraction Name',
          bio: 'Updated bio for the test attraction',
          // Add other fields you want to update
        }),
      });
      const data = await response.json();
      setMessage(`Update Attraction Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setMessage(`Update Attraction Error: ${error.message}`);
    }
  };

  const handleDeleteAttraction = async () => {
    if (!attractionId) {
      setMessage('Please enter an Attraction ID to delete.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/api/sponseeattractions/${attractionId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Include your authorization token if needed
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.status === 204) {
        setMessage(`Attraction with ID ${attractionId} deleted successfully.`);
      } else {
        const data = await response.json();
        setMessage(`Delete Attraction Response: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      setMessage(`Delete Attraction Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Test Sponsee Attraction Routes</h2>
      <div>
        <label>Sponsee Org ID (for create/list):</label>
        <input
          type="text"
          value={sponseeOrgIdForNew}
          onChange={(e) => {
            setSponseeOrgIdForNew(e.target.value);
            // setSponseeOrgIdForList(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleCreateAttraction}>Create Sponsee Attraction</button>
      </div>

      <div>
        <label>Attraction ID:</label>
        <input
          type="text"
          value={attractionId}
          onChange={(e) => setAttractionId(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleGetAttraction}>Get Sponsee Attraction by ID</button>
      </div>
      <div>
        <button onClick={handleGetAllAttractions}>Get All Sponsee Attractions for Org</button>
      </div>
      <div>
        <button onClick={handleUpdateAttraction}>Update Sponsee Attraction by ID</button>
      </div>
      <div>
        <button onClick={handleDeleteAttraction}>Delete Sponsee Attraction by ID</button>
      </div>

      {message && <p><strong>{message}</strong></p>}
    </div>
  );
};

export default SponseeAttractionTester;