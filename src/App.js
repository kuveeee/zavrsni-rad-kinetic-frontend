import Sidebar from './components/Sidebar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Klijenti from './views/Klijenti';
import Usluge from './views/Usluge';
import NovaRezervacija from './views/NovaRezervacija';
import Naplacivanje from './views/Naplacivanje';
import Profil from './views/Profil';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/klijenti" component={Klijenti} />
          <Route path="/usluge" component={Usluge} />
          <Route path="/nova-rezervacija" component={NovaRezervacija} />
          <Route path="/naplacivanje" component={Naplacivanje} />
          <Route path="/profil" component={Profil} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
