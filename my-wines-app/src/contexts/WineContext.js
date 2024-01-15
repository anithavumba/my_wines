// src/contexts/WineContext.js
import React, { createContext, useContext, useState } from 'react';

const WineContext = createContext();

export const useWineContext = () => {
  return useContext(WineContext);
};

export const WineProvider = ({ children }) => {
  const [wines, setWines] = useState([
    { id: 1, name: 'Wine 1', year: 2020, type: 'Red', varietal: 'Cabernet Sauvignon', rating: 4, consumed: false, dateConsumed: null },
    { id: 2, name: 'Wine 2', year: 2019, type: 'White', varietal: 'Chardonnay', rating: 3.5, consumed: true, dateConsumed: '2022-01-01' },
    // Add more default wines as needed
  ]);

  const addWine = (newWine) => {
    setWines([...wines, newWine]);
  };

  return (
    <WineContext.Provider value={{ wines, addWine }}>
      {children}
    </WineContext.Provider>
  );
};
