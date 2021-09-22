import React, { useEffect } from 'react';
import '../assets/styles/Klijenti.css';
import ClientSearch from '../components/clientSearch'; //komponenta za pretragu klijenata
import plus from '../assets/images/usluge/plus.png';
import { Link } from 'react-router-dom';
import { Clients } from '../services/index';

function Klijenti() {
  const [clients, setClients] = React.useState([]);

  const getClients = async () => {
    let res = await Clients.getAllClients();
    setClients(res);
    console.log(clients);
  };

  useEffect(() => {
    getClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main">
      <div class="klijenti_body">
        <div class="flex_row">
          <h1 class="h1">Pacijenti</h1>
          <Link style={{ textDecoration: 'none' }} exact to="/novi-pacijent">
            <div class="novi_klijent">
              <img src={plus} alt="Dodavanje novog klijenta"></img>
              <h3>Novi pacijent</h3>
            </div>
          </Link>
        </div>
        <div class="flex_row">
          <ClientSearch />
        </div>
        <div class="flex_row">
          <div class="klijenti_tablica">
            <li>IME I PREZIME</li>
            <li>KONTAKT BROJ</li>
            <li>E-POŠTA</li>
            <li>DATUM ROĐENJA</li>
            <li>SPOL</li>
          </div>
          {clients.map((client) => (
            <div className="klijent_box">
              <li>
                <strong>{client.client_first_name + ' ' + client.client_last_name}</strong>
              </li>
              <li>{client.client_phone_number}</li>
              <li>{client.client_email}</li>
              <li>{client.client_birth_date}</li>
              <li>{client.client_sex}</li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Klijenti;
