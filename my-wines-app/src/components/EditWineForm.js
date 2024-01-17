// EditWineForm.js
import React, { useState } from 'react';

const EditWineForm = () => {
  const [editedWineName, setEditedWineName] = useState('');
  const [editedYear, setEditedYear] = useState('');
  const [editedType, setEditedType] = useState(''); // Use this for the single-select list
  const [editedVarietal, setEditedVarietal] = useState('');
  const [editedRating, setEditedRating] = useState('');
  const [editedConsumed, setEditedConsumed] = useState('');
  const [editedDateConsumed, setEditedDateConsumed] = useState('');

  const handleSaveChanges = () => {
    // Use the variables to avoid "never used" warnings
    console.log('Edited Wine Name:', editedWineName);
    console.log('Edited Year:', editedYear);
    console.log('Edited Type:', editedType);
    console.log('Edited Varietal:', editedVarietal);
    console.log('Edited Rating:', editedRating);
    console.log('Edited Consumed:', editedConsumed);
    console.log('Edited Date Consumed:', editedDateConsumed);
    // Add other fields
  };

  return (
    <div>
      <h2>Edit Wine Page</h2>
      <label>Edit Wine Name: </label>
      <input
        type="text"
        value={editedWineName}
        onChange={(e) => setEditedWineName(e.target.value)}
      />
      <br />
      <label>Edit Year: </label>
      <input type="number" value={editedYear} onChange={(e) => setEditedYear(e.target.value)} />
      <br />
      <label>Edit Type: </label>
      <select value={editedType} onChange={(e) => setEditedType(e.target.value)}>
        <option value="Red">Red</option>
        <option value="White">White</option>
        <option value="Rosé">Rosé</option>
        <option value="White Blend">White Blend</option>
        <option value="Red Blend">Red Blend</option>
      </select>
      <br />
      <label>Edit Varietal: </label>
      <input type="text" value={editedVarietal} onChange={(e) => setEditedVarietal(e.target.value)} />
      <br />
      {/* Use these variables in the return part to avoid "never used" warnings */}
      <label>Edit Rating: </label>
      <input type="text" value={editedRating} onChange={(e) => setEditedRating(e.target.value)} />
      <br />
      <label>Edit Consumed: </label>
      <input type="text" value={editedConsumed} onChange={(e) => setEditedConsumed(e.target.value)} />
      <br />
      <label>Edit Date Consumed: </label>
      <input type="text" value={editedDateConsumed} onChange={(e) => setEditedDateConsumed(e.target.value)} />
      <br />
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
};

export default EditWineForm;
