// AddWineForm.js

import React, { useState } from 'react';

const AddWineForm = () => {
  const [wineName, setWineName] = useState('');
  // Add other state variables for wine details

  const handleAddWine = () => {
    // Add logic to send the new wine data to the server
    console.log('Wine Name:', wineName);
    // Add other fields
  };

  return (
    <div>
      <h2>Add Wine Page</h2>
      <label>Wine Name: </label>
      <input type="text" value={wineName} onChange={(e) => setWineName(e.target.value)} />
      {/* Add other input fields */}
      <br />
      <button onClick={handleAddWine}>Add Wine</button>
    </div>
  );
};

export default AddWineForm;
