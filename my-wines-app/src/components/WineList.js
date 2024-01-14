// WineList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WineList = () => {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    // Fetch wines from the server
    const dummyWines = [
      { id: 1, name: 'Wine 1', year: 2020, type: 'Red', varietal: 'Cabernet Sauvignon' },
      { id: 2, name: 'Wine 2', year: 2019, type: 'White', varietal: 'Chardonnay' },
    ];
    setWines(dummyWines);
  }, []);

  return (
    <div>
      <h2>List of Wines Page</h2>
      <ul>
        {wines.map((wine) => (
          <li key={wine.id}>
            <Link to={`/edit-wine/${wine.id}`}>Edit</Link> {/* Link to Edit Wine Page */}
            {wine.name}
          </li>
        ))}
      </ul>
      <Link to="/add-wine">Add Wine</Link> {/* Link to Add Wine Page */}
      <br />
      <Link to="/logout">Logout</Link> {/* Link to Logout Page */}
    </div>
  );
};

export default WineList;
