// src/App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LogoSVG from './logo.svg';
import AddWineForm from './components/AddWineForm'; 
import WineList from './components/WineList'; 
import EditWineForm from './components/EditWineForm'; 
import LoginForm from './components/LoginForm'; 
import LogoutPage from './components/LogoutPage';

function App() {
  const [wines, setWines] = useState([]);

  const addWine = (newWine) => {
    setWines([...wines, newWine]);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={LogoSVG} className="App-logo" alt="My Wines Logo" />
          <h1>My Wines App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add-wine">Add Wine</Link>
              </li>
              <li>
                <Link to="/list-wines">List Wines</Link>
              </li>
              {/* Add other navigation links */}
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/add-wine">
              <AddWineForm addWine={addWine} />
            </Route>
            <Route path="/list-wines">
              <WineList wines={wines} />
            </Route>
            <Route path="/edit-wine/:id" component={EditWineForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={LogoutPage} />
            {/* Add other routes as needed */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
