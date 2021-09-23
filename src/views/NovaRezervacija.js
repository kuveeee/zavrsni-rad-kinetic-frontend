import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Clients, Services } from '../services';
//import { toast } from 'react-toastify'; //               Notifications
import 'react-toastify/dist/ReactToastify.css'; //       Notifications styles
import '../assets/styles/NovaRezervacija.css'; //       asset
// import woman from '../assets/images/woman.png'; //      asset
//import DateTimePicker from 'react-datetime-picker'; //  Datetime picker
//import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
// import PostForm from '../components/PostForm'

// toast.configure()
function NovaRezervacija() {
  // {notify_success} za pozivanje notifikacije

  // const notify = () => {
  //   toast('🦄', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // }
  // const notify_success = () => {
  //   toast.success('🦄', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // }
  // const notify_error = () => {
  //   toast.error('🦄', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // }
  // const notify_info = () => {
  //   toast.info('🦄', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // }
  // const notify_warning = () => {
  //   toast.warn('🦄', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // }
  const [services, setServices] = React.useState([]);
  const [clients, setClients] = React.useState([]);

  const getClients = async () => {
    let res = await Clients.getAllClients();
    setClients(res);
    console.log(clients);
  };

  const getServices = async () => {
    let res = await Services.getAllServices();
    setServices(res);
    console.log(services);
  };
  useEffect(() => {
    getServices();
    getClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const url = 'https://kinetic-db.herokuapp.com/reservations';
  const [data, setData] = useState({
    reservation_serviceID: '',
    reservation_start: '',
    reservation_end: '',
    reservation_name: '',
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      reservation_start: data.reservation_start,
      reservation_end: data.reservation_end,
      reservation_name: data.reservation_name,
      reservation_serviceID: data.serviceid,
    }).then((res) => {
      console.log(res.data);
    });
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  return (
    <div className="main">
      <div class="flex_row">
        <div class="novaRezervacija_body">
          <h1>Nova rezervacija</h1>
          <div class="break"></div>
          <div class="flex_column">
            <form onSubmit={(e) => submit(e)}>
              <div class="odabir_termina">
                <h2>Odaberite početni datum i vrijeme rezervacije</h2>
                <input
                  onChange={(e) => handle(e)}
                  value={data.reservation_start}
                  type="datetime-local"
                ></input>
                <h2>Odaberite krajnji datum i vrijeme rezervacije</h2>
                <input onChange={(e) => handle(e)} value={data.reservation_end} type="datetime-local"></input>
                <h2>Upišite naziv rezervacije</h2>
                <input onChange={(e) => handle(e)} value={data.reservation_name} type="text"></input>
                <div class="odabir_usluga">
                  <h2>Odabir usluge</h2>

                  <select onChange={(e) => handle(e)} value={data.reservation_serviceID} class="ui_dropdown">
                    {services.map((service) => (
                      <option value={service.serviceid}>{service.service_name}</option>
                    ))}
                  </select>
                  <div class="break"></div>
                </div>
                <div class="odabir_usluga">
                  <h2>Odabir klijenta</h2>

                  <select onChange={(e) => handle(e)} value={data.reservation_serviceID} class="ui_dropdown">
                    {clients.map((client) => (
                      <option value={client.client_id}>
                        {client.client_first_name + ' ' + client.client_last_name}
                      </option>
                    ))}
                  </select>
                  <div class="break"></div>
                </div>
                <div class="kreiraj">
                  <button>Kreiraj</button>
                </div>
              </div>
              <div class="grayed_out">
                <div class="odabir_dijagnoze">
                  <h2>Dijagnoza</h2>
                  <input type="text"></input>
                  <div class="break"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NovaRezervacija;
