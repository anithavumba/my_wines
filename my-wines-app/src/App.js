// src/App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import LogoSVG from './logo.svg';
import AddWineForm from './components/AddWineForm';
import WineList from './components/WineList';
import EditWineForm from './components/EditWineForm';
import LoginForm from './components/LoginForm';
import LogoutPage from './components/LogoutPage';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    }
  />
);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [wines, setWines] = useState([]);

  const addWine = (newWine) => {
    setWines([...wines, newWine]);
  };

  const handleLogin = () => {
    // Implement your authentication logic here
    // For simplicity, let's consider any non-empty email/password as a successful login
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={LogoSVG} className="App-logo" alt="My Wines Logo" />
          <h1>My Wines App</h1>
          <nav>
            <ul>
              {isAuthenticated ? (
                <>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/add-wine">Add Wine</Link>
                  </li>
                  <li>
                    <Link to="/list-wines">List Wines</Link>
                  </li>
                  <li>
                    <Link to="/logout" onClick={handleLogout}>
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
              {/* Add other navigation links */}
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route
              path="/login"
              render={(props) => <LoginForm {...props} isAuthenticated={isAuthenticated} onLogin={handleLogin} />}
            />
            <PrivateRoute path="/add-wine" component={AddWineForm} isAuthenticated={isAuthenticated} />
            <PrivateRoute path="/list-wines" component={WineList} wines={wines} isAuthenticated={isAuthenticated} />
            <PrivateRoute path="/edit-wine/:id" component={EditWineForm} isAuthenticated={isAuthenticated} />
            <PrivateRoute path="/logout" component={LogoutPage} isAuthenticated={isAuthenticated} />
            {/* Add other routes as needed */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
