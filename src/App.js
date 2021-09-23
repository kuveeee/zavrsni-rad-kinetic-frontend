import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import PrivateRoute from './views/PrivateRoute';
import PublicRoute from './views/PublicRoute';
const AuthorizationContext = React.createContext();

const App = () => {
  const token = localStorage.getItem('admin');
  // console.log('Token: ', token);

  return (
    <div className="App">
      <Router>
        <AuthorizationContext.Provider value={token}>
          {token ? <PrivateRoute /> : <PublicRoute />}
        </AuthorizationContext.Provider>
      </Router>
    </div>
  );
};

export default App;
