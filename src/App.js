import Sidebar from './components/Sidebar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Pacijenti from './views/Pacijenti';
import noviPacijent from './views/noviPacijent'
import Usluge from './views/Usluge';
import NovaRezervacija from './views/NovaRezervacija';
import Naplacivanje from './views/Naplacivanje';
import Profil from './views/Profil';
import Kalendar from './views/Kalendar';
import Login from './views/Login';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/kalendar" component={Kalendar} />
          <Route path="/pacijenti" component={Pacijenti} />
          <Route path="/usluge" component={Usluge} />
          <Route path="/nova-rezervacija" component={NovaRezervacija} />
          <Route path="/naplacivanje" component={Naplacivanje} />
          <Route path="/profil" component={Profil} />
          <Route path="/login" component={Login} />
          <Route path="/novi-pacijent" component={noviPacijent} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
