import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Login from './Login';
import Dashboard from './Dashboard';
import Kalendar from './Kalendar';
import Klijenti from './Klijenti';
import Usluge from './Usluge';
import NovaRezervacija from './NovaRezervacija';
import Naplacivanje from './Naplacivanje';
import Profil from './Profil';
import NoviPacijent from './NooviPacijent';
import NovaUsluga from './NoovaUsluga';

const PrivateRoute = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/kalendar" component={Kalendar} />
          <Route path="/klijenti" component={Klijenti} />
          <Route path="/usluge" component={Usluge} />
          <Route path="/nova-rezervacija" component={NovaRezervacija} />
          <Route path="/naplacivanje" component={Naplacivanje} />
          <Route path="/profil" component={Profil} />
          <Route path="/novi-pacijent" component={NoviPacijent} />
          <Route path="/nova-usluga" component={NovaUsluga} />
        </Switch>
      </Router>
    </>
  );
};

export default PrivateRoute;
