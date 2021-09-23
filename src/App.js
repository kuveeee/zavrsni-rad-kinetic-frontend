import Sidebar from './components/Sidebar'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import Klijenti from './views/Klijenti'
import NoviPacijent from './views/NooviPacijent' //forma za dodavanje novog pacijenta, bez rezervacije
import Usluge from './views/Usluge'
import NovaRezervacija from './views/NovaRezervacija'
import Naplacivanje from './views/Naplacivanje'
import Profil from './views/Profil'
import Kalendar from './views/Kalendar'
import Login from './views/Login'
import NovaUsluga from './views/NoovaUsluga' //forma za dodavanje nove usluge

const App = () => {
  return (
    <div className="App">
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
          <Route path="/login" component={Login} />
          <Route path="/novi-pacijent" component={NoviPacijent} />
          <Route path="/nova-usluga" component={NovaUsluga} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
