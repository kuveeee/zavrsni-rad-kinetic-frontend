import Sidebar from './components/Sidebar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Klijenti from './views/Klijenti';
import NoviPacijent from './views/NooviPacijent'; //forma za dodavanje novog pacijenta, bez rezervacije
import Usluge from './views/Usluge';
import NovaRezervacija from './views/NovaRezervacija';
import Naplacivanje from './views/Naplacivanje';
import Profil from './views/Profil';
import Kalendar from './views/Kalendar';
import Login from './views/Login';
import NovaUsluga from './views/NoovaUsluga'; //forma za dodavanje nove usluge
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
