// src/SponseeOrgButtons.js
import React, { useState } from 'react';

const SponseeOrgButtons = () => {
  const [sponseeOrgMessage, setSponseeOrgMessage] = useState('');
  const [sponseeOrgId, setSponseeOrgId] = useState('');

  const handleCreateSponseeOrg = async () => {
    try {
      const dummySponseeOrgData = {
        userId: '2698c006-5f65-4ca9-9170-7449b9284b5b', // Replace with a valid user ID if your auth requires it
        name: 'Dummy Organization Name',
        type: 'Dummy Type',
        sponseeOrg_type: 'Dummy Sub-Type',
        logo: 'dummy-logo.png',
        date: new Date().toISOString(),
        fullAddress: '123 Dummy Street, Dummy City',
        sports: 'Dummy Sport',
        level: 'Dummy Level',
        bio: 'This is a dummy organization for testing purposes.',
        photos: ['dummy-photo1.jpg'],
        detailDescription: 'More details about the dummy org.',
        socialMediaLinks: ['dummy.twitter.com'],
        emails: ['dummy@example.com'],
        contacts: ['123-456-7890'],
        audienceCount: [100, 200],
        categoryPreference: 'Dummy Category',
        sectorPreference: 'Dummy Sector',
        genderPreference: 'All',
        agePreference: 25,
        classPreference: 'Dummy Class',
      };

      const response = await fetch('http://localhost:5000/api/sponseeorgs', { // Ensure correct route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include your authorization token here if your route is protected
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(dummySponseeOrgData),
      });

      const data = await response.json();
      setSponseeOrgMessage(`Create Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setSponseeOrgMessage(`Create Error: ${error.message}`);
    }
  };

  const handleGetSponseeOrg = async () => {
    if (!sponseeOrgId) {
      setSponseeOrgMessage('Please enter an ID to get.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/api/sponseeorgs/${sponseeOrgId}`, { // Adjust port if needed
        method: 'GET',
        headers: {
          // You might need to include a token here
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setSponseeOrgMessage(`Get Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setSponseeOrgMessage(`Get Error: ${error.message}`);
    }
  };

  const handleGetAllSponseeOrgs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/sponseeorgs', { // Adjust port if needed
        method: 'GET',
        headers: {
          // You might need to include a token here
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setSponseeOrgMessage(`Get All Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setSponseeOrgMessage(`Get All Error: ${error.message}`);
    }
  };

  const handleUpdateSponseeOrg = async () => {
    if (!sponseeOrgId) {
      setSponseeOrgMessage('Please enter an ID to update.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/api/sponseeorgs/${sponseeOrgId}`, { // Adjust port if needed
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // You might need to include a token here
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          // Replace with your actual update data
          description: 'Updated description for the test organization',
        }),
      });
      const data = await response.json();
      setSponseeOrgMessage(`Update Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setSponseeOrgMessage(`Update Error: ${error.message}`);
    }
  };

  const handleDeleteSponseeOrg = async () => {
    if (!sponseeOrgId) {
      setSponseeOrgMessage('Please enter an ID to delete.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/api/sponseeorgs/${sponseeOrgId}`, { // Adjust port if needed
        method: 'DELETE',
        headers: {
          // You might need to include a token here
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setSponseeOrgMessage(`Delete Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setSponseeOrgMessage(`Delete Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Sponsee Organizations</h2>
      <button onClick={handleCreateSponseeOrg}>Create Sponsee Org</button>
      <div>
        <input
          type="text"
          placeholder="Enter Sponsee Org ID"
          value={sponseeOrgId}
          onChange={(e) => setSponseeOrgId(e.target.value)}
        />
        <button onClick={handleGetSponseeOrg}>Get Sponsee Org</button>
        <button onClick={handleUpdateSponseeOrg}>Update Sponsee Org</button>
        <button onClick={handleDeleteSponseeOrg}>Delete Sponsee Org</button>
      </div>
      <button onClick={handleGetAllSponseeOrgs}>Get All Sponsee Orgs</button>
      {sponseeOrgMessage && <p>{sponseeOrgMessage}</p>}
    </div>
  );
};

export default SponseeOrgButtons;