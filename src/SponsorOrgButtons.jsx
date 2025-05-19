import React, { useState } from 'react';

const SponsorOrgButtons = () => {
  const [sponsorOrgMessage, setsponsorOrgMessage] = useState('');
  const [sponsorOrgId, setsponsorOrgId] = useState('');

  //
  const handleCreatesponsorOrg = async () => {
    try {
      const dummysponsorOrgData = {
        userId: '2698c006-5f65-4ca9-9170-7449b9284b5b', // Replace with a valid user ID if needed for your database constraints
        members: [], // Initially no members
        logo: 'https://via.placeholder.com/150',
        name: 'Awesome Sponsors Inc.',
        address: '123 Main St, Anytown, USA',
        bio: 'We are a fantastic sponsoring organization supporting great causes.',
        photos: ['https://via.placeholder.com/300', 'https://via.placeholder.com/400'],
        description: 'A detailed description of our mission and values.',
        socialMediaLinks: ['https://facebook.com/awesomesponsors', 'https://twitter.com/awesponsors'],
        emails: ['info@awesomesponsors.com', 'contact@awesomesponsors.com'],
        contacts: ['John Doe - CEO', 'Jane Smith - Marketing Manager'],
        budgetPreference: 'Medium',
        categoryPreference: 'Sports',
        sectorPreference: 'Technology',
        genderPreference: 'All',
        agePreference: null,
        classPreference: 'Any',
        sponsorCampaigns: [], // Initially no campaigns
      };

      const response = await fetch('http://localhost:5000/api/sponsororgs', { // Ensure correct route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include your authorization token here if your route is protected
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(dummysponsorOrgData),
      });

      const data = await response.json();
      setsponsorOrgMessage(`Create Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setsponsorOrgMessage(`Create Error: ${error.message}`);
    }
  };

  //
  const handleGetsponsorOrg = async () => {
    if (!sponsorOrgId) {
      setsponsorOrgMessage('Please enter an ID to get.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/api/sponsororgs/${sponsorOrgId}`, { // Adjust port if needed
        method: 'GET',
        headers: {
          // You might need to include a token here
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setsponsorOrgMessage(`Get Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setsponsorOrgMessage(`Get Error: ${error.message}`);
    }
  };

  //
  const handleGetAllsponsorOrgs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/sponsororgs', { // Adjust port if needed
        method: 'GET',
        headers: {
          // You might need to include a token here
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setsponsorOrgMessage(`Get All Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setsponsorOrgMessage(`Get All Error: ${error.message}`);
    }
  };

  //
  const handleUpdatesponsorOrg = async () => {
    if (!sponsorOrgId) {
      setsponsorOrgMessage('Please enter an ID to update.');
      return;
    }
    try {
      const dummyUpdateData = {
        logo: 'https://via.placeholder.com/200', // Updated logo
        name: 'Super Awesome Sponsors Co.', // Updated name
        bio: 'We have evolved to support even more incredible initiatives!', // Updated bio
        description: 'An even more detailed account of our expanded mission.', // Updated description
        socialMediaLinks: ['https://linkedin.com/company/super-awesome', 'https://instagram.com/super_sponsors'], // Updated links
        budgetPreference: 'High', // Updated preference
        sectorPreference: 'Environmental', // Updated preference
        agePreference: 18, // Updated age preference
      };

      const response = await fetch(`http://localhost:5000/api/sponsororgs/${sponsorOrgId}`, { // Adjust port if needed
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // You might need to include a token here
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(dummyUpdateData),
      });
      const data = await response.json();
      setsponsorOrgMessage(`Update Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setsponsorOrgMessage(`Update Error: ${error.message}`);
    }
  };

  const handleDeletesponsorOrg = async () => {
    if (!sponsorOrgId) {
      setsponsorOrgMessage('Please enter an ID to delete.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/api/sponsororgs/${sponsorOrgId}`, { // Adjust port if needed
        method: 'DELETE',
        headers: {
          // You might need to include a token here
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setsponsorOrgMessage(`Delete Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setsponsorOrgMessage(`Delete Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>sponsor Organizations</h2>
      <button onClick={handleCreatesponsorOrg}>Create sponsor Org</button>
      <div>
        <input
          type="text"
          placeholder="Enter sponsor Org ID"
          value={sponsorOrgId}
          onChange={(e) => setsponsorOrgId(e.target.value)}
        />
        <button onClick={handleGetsponsorOrg}>Get sponsor Org</button>
        <button onClick={handleUpdatesponsorOrg}>Update sponsor Org</button>
        <button onClick={handleDeletesponsorOrg}>Delete sponsor Org</button>
      </div>
      <button onClick={handleGetAllsponsorOrgs}>Get All sponsor Orgs</button>
      {sponsorOrgMessage && <p>{sponsorOrgMessage}</p>}
    </div>
  );
};

export default SponsorOrgButtons;