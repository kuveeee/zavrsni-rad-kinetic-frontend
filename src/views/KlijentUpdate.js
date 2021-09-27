import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import 'react-toastify/dist/ReactToastify.css'; //Notifications styles
import { Clients } from '../services/index';

// toast.configure();
// const notify_success = () => {
//   toast.success('🦄 Uspješno', {
//     position: 'top-right',
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//   });
// };

// const notify_error = () => {
//   toast.error('🦄', {
//     position: 'top-right',
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//   });
// };

function KlijentUpdate() {
  const [client, setClient] = React.useState();
  const { id } = useParams();

  const getClients = async () => {
    let res = await Clients.getClient(id);
    setClient(res);
  };

  useEffect(() => {
    getClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main">
      <div class="noviPacijent_body">
        <div class="flex_row">
          <h1>Uredi podatke o pacijentu</h1>
          <div class="break"></div>
          <div class="break"></div>
          <div class="klijent">
            <form>
              <div class="input2">
                <p>Ime</p>
                <input type="text" id="client_first_name" value={client} disabled></input>
                <p>Prezime</p>
                <input type="text" id="client_last_name" disabled></input>
              </div>
              <div class="input2">
                <p>Broj telefona</p>
                <input type="text" id="client_phone_number"></input>
                <p>E-pošta</p>
                <input type="email" id="client_email"></input>
              </div>
              <div class="kreiraj">
                <button
                  onClick={() => {
                    console.log(client);
                  }}
                >
                  Kreiraj
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KlijentUpdate;
