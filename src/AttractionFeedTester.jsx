import React, { useState } from 'react';

const AttractionFeedTester = () => {
  const [attractionId, setAttractionId] = useState('');
  const [feedData, setFeedData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAttractionFeed = async () => {
    setIsLoading(true);
    setFeedData(null);
    setErrorMessage(null);

    try {
      const response = await fetch(`http://localhost:5000/api/attraction-feed/${attractionId}`);
      if (!response.ok) {
        const error= await response.json();
        setErrorMessage(error.error || `HTTP error! status: ${response.status}`);
        return;
      }
      const data= await response.json();
      setFeedData(data);
    } catch (error) {
      setErrorMessage(error.message || 'Failed to fetch attraction feed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Test Attraction Feed Endpoint</h2>
      <div>
        <label htmlFor="attractionId">Attraction ID:</label>
        <input
          type="text"
          id="attractionId"
          value={attractionId}
          onChange={(e) => setAttractionId(e.target.value)}
        />
      </div>
      <button onClick={fetchAttractionFeed} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Attraction Feed'}
      </button>

      {errorMessage && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          Error: {errorMessage}
        </div>
      )}
  
      {feedData && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Attraction Feed Data:</h3>
          <pre>{JSON.stringify(feedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AttractionFeedTester;