// AddWineForm.js
import React, { useState } from 'react';

const AddWineForm = () => {
  const [wineName, setWineName] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState(''); // Use this for the single-select list
  const [varietal, setVarietal] = useState('');
  const [rating, setRating] = useState('');
  const [consumed, setConsumed] = useState('');
  const [dateConsumed, setDateConsumed] = useState('');

  const handleAddWine = () => {
    // Use the variables to avoid "never used" warnings
    console.log('Wine Name:', wineName);
    console.log('Year:', year);
    console.log('Type:', type);
    console.log('Varietal:', varietal);
    console.log('Rating:', rating);
    console.log('Consumed:', consumed);
    console.log('Date Consumed:', dateConsumed);
    // Add other fields
  };

  return (
    <div>
      <h2>Add Wine Page</h2>
      <label>Wine Name: </label>
      <input type="text" value={wineName} onChange={(e) => setWineName(e.target.value)} />
      <br />
      <label>Year: </label>
      <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
      <br />
      <label>Type: </label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Red">Red</option>
        <option value="White">White</option>
        <option value="Rosé">Rosé</option>
        <option value="White Blend">White Blend</option>
        <option value="Red Blend">Red Blend</option>
      </select>
      <br />
      <label>Varietal: </label>
      <input type="text" value={varietal} onChange={(e) => setVarietal(e.target.value)} />
      <br />
      {/* Use these variables in the return part to avoid "never used" warnings */}
      <label>Rating: </label>
      <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
      <br />
      <label>Consumed: </label>
      <input type="text" value={consumed} onChange={(e) => setConsumed(e.target.value)} />
      <br />
      <label>Date Consumed: </label>
      <input type="text" value={dateConsumed} onChange={(e) => setDateConsumed(e.target.value)} />
      <br />
      <button onClick={handleAddWine}>Add Wine</button>
    </div>
  );
};

export default AddWineForm;
