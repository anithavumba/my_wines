// WineList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WineList = () => {
  const [wines, setWines] = useState([]);
  const winesPerPage = 20;

  useEffect(() => {
    // Fetch wines from the server
    const dummyWines = [
      { id: 1, name: 'Wine 1', year: 2020, type: 'Red', varietal: 'Cabernet Sauvignon' },
      { id: 2, name: 'Wine 2', year: 2019, type: 'White', varietal: 'Chardonnay' },
      // Add more dummy data as needed
    ];
    setWines(dummyWines);
  }, []);

  return (
    <div>
      <h2>List of Wines Page</h2>
      <ul>
        {wines.slice(0, winesPerPage).map((wine) => (
          <li key={wine.id}>
            <Link to={`/edit-wine/${wine.id}`}>Edit</Link> {wine.name}
          </li>
        ))}
      </ul>
      <Link to="/add-wine">Add Wine</Link>
      <br />
      <Link to="/logout">Logout</Link>

      {/* Pagination Controls (Bonus) */}
      <div>
        {Array.from({ length: Math.ceil(wines.length / winesPerPage) }, (_, index) => (
          <span key={index} style={{ margin: '0 5px', cursor: 'pointer' }}>
            {/* Note: In a real app, you'd handle the pagination logic to show different pages */}
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WineList;
