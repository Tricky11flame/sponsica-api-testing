// src/components/SponsorCampaignTester.js
import React, { useState } from 'react';

const SponsorCampaignTester = () => {
  const [message, setMessage] = useState('');
  const [campaignId, setCampaignId] = useState('');
  const [sponsorOrgIdForNew, setSponsorOrgIdForNew] = useState('your-sponsor-org-id'); // Replace with a valid ID for testing creation
  // const [sponsorOrgIdForList, setSponsorOrgIdForList] = useState('your-sponsor-org-id'); // Replace with a valid ID for listing

  const handleCreateCampaign = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/sponsorcampaigns`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include your authorization token if needed
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          sponsorOrgId : sponsorOrgIdForNew,
          name: 'Test Campaign',
          targetLocation: 'Test Location',
          bio: 'A test campaign',
          photos: ['photo1.jpg'],
          // Add other fields as needed for your testing
          // Ensure sponsorOrgId is sent
        }),
      });
      const data = await response.json();
      setMessage(`Create Campaign Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setMessage(`Create Campaign Error: ${error.message}`);
    }
  };

  const handleGetCampaign = async () => {
    if (!campaignId) {
      setMessage('Please enter an Campaign ID to get.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/api/sponsorcampaigns/${campaignId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include your authorization token if needed
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setMessage(`Get Campaign Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setMessage(`Get Campaign Error: ${error.message}`);
    }
  };

  const handleGetAllCampaigns = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/sponsorcampaigns/${campaignId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include your authorization token if needed
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setMessage(`Get All Campaigns Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setMessage(`Get All Campaigns Error: ${error.message}`);
    }
  };

  const handleUpdateCampaign = async () => {
    if (!campaignId) {
      setMessage('Please enter an Campaign ID to update.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/api/sponsorcampaigns/${campaignId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Include your authorization token if needed
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({

          name: 'Updated Test Campaign Name',
          bio: 'Updated bio for the test campaign',
          // Add other fields you want to update
        }),
      });
      const data = await response.json();
      setMessage(`Update Campaign Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setMessage(`Update Campaign Error: ${error.message}`);
    }
  };

  const handleDeleteCampaign = async () => {
    if (!campaignId) {
      setMessage('Please enter an Campaign ID to delete.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/api/sponsorcampaigns/${campaignId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Include your authorization token if needed
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.status === 204) {
        setMessage(`Campaign with ID ${campaignId} deleted successfully.`);
      } else {
        const data = await response.json();
        setMessage(`Delete Campaign Response: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      setMessage(`Delete Campaign Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Test Sponsor Campaign Routes</h2>
      <div>
        <label>Sponsor Org ID (for create/list):</label>
        <input
          type="text"
          value={sponsorOrgIdForNew}
          onChange={(e) => {
            setSponsorOrgIdForNew(e.target.value);
            // setSponsorOrgIdForList(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleCreateCampaign}>Create Sponsor Campaign</button>
      </div>

      <div>
        <label>Campaign ID:</label>
        <input
          type="text"
          value={campaignId}
          onChange={(e) => setCampaignId(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleGetCampaign}>Get Sponsor Campaign by ID</button>
      </div>
      <div>
        <button onClick={handleGetAllCampaigns}>Get All Sponsor Campaigns for Org</button>
      </div>
      <div>
        <button onClick={handleUpdateCampaign}>Update Sponsor Campaign by ID</button>
      </div>
      <div>
        <button onClick={handleDeleteCampaign}>Delete Sponsor Campaign by ID</button>
      </div>

      {message && <p><strong>{message}</strong></p>}
    </div>
  );
};

export default SponsorCampaignTester;