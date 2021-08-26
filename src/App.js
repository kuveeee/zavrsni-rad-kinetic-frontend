import Sidebar from './components/Sidebar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Klijenti from './views/Klijenti';
import Usluge from './views/Usluge';
import NovaRezervacija from './views/NovaRezervacija';

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
        </Switch>
      </Router>
    </div>
  );
};

export default App;
