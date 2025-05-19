import React, { useState } from 'react';

const CampaignFeedTester = () => {
  const [campaignId, setCampaignId] = useState('');
  const [feedData, setFeedData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCampaignFeed = async () => {
    setIsLoading(true);
    setFeedData(null);
    setErrorMessage(null);

    try {
      const response = await fetch(`http://localhost:5000/api/campaign-feed/${campaignId}`);
      if (!response.ok) {
        const error= await response.json();
        setErrorMessage(error.error || `HTTP error! status: ${response.status}`);
        return;
      }
      const data= await response.json();
      setFeedData(data);
    } catch (error) {
      setErrorMessage(error.message || 'Failed to fetch campaign feed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Test Campaign Feed Endpoint</h2>
      <div>
        <label htmlFor="campaignId">Campaign ID:</label>
        <input
          type="text"
          id="campaignId"
          value={campaignId}
          onChange={(e) => setCampaignId(e.target.value)}
        />
      </div>
      <button onClick={fetchCampaignFeed} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Campaign Feed'}
      </button>

      {errorMessage && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          Error: {errorMessage}
        </div>
      )}
  
      {feedData && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Campaign Feed Data:</h3>
          <pre>{JSON.stringify(feedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CampaignFeedTester;