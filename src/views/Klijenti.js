import React, { useEffect, useState } from 'react';
import '../assets/styles/Klijenti.css';
import plus from '../assets/images/usluge/plus.png';
import { toast } from 'react-toastify'; //notifikacije
import 'react-toastify/dist/ReactToastify.css'; //Notifications styles
import { Link } from 'react-router-dom';
import { Clients, Service } from '../services/index';
import * as Icons from '@material-ui/icons';
import '../assets/styles/clientSearch.css';
const moment = require('moment');

// const notify_success = () => {
//   toast.success('🦄 Uspješno', {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//   });
// }
//Notifikacije
function Klijenti() {
  const [data] = useState({
    client_id: '',
  });
  const [clients, setClients] = React.useState([]);
  const [searchValue, setSearchValue] = useState('');

  const notify_info = () => {
    toast.info('Pacijent je uspješno obrisan', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const searchData = (searchValue) => {
    return clients.filter(
      (client) =>
        client.client_first_name.includes(searchValue) || client.client_last_name.includes(searchValue)
    );
  };

  const removeClient = async (id) => {
    Service.delete(`/clients/${id}`, data.client_id).then((result) => {
      notify_info();
    });
  };

  //Dohvat klijenata
  const getClients = async () => {
    let res = await Clients.getAllClients();
    setClients(res);
  };

  useEffect(() => {
    if (searchValue !== '') {
      let result = searchData(searchValue);
      setClients(result);
    } else {
      getClients();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

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
          <div className="client_search">
            <div className="search">
              <Icons.Search />
              <input
                placeholder="Pretraga pacijenata"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              ></input>
            </div>
          </div>
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
              <Link to={`/clients/${client.client_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <li>
                  <strong>{client.client_first_name + ' ' + client.client_last_name}</strong>
                </li>
              </Link>
              <li>{client.client_phone_number}</li>
              <li>{client.client_email}</li>
              <li>{moment(client.client_birth_date).format('L')}</li>
              <li>{client.client_sex}</li>
              <button onClick={() => removeClient(client.client_id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Klijenti;
