import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Clients, Services } from '../services';
import { toast } from 'react-toastify'; //               Notifications
import 'react-toastify/dist/ReactToastify.css'; //       Notifications styles
import '../assets/styles/NovaRezervacija.css'; //       asset
// import woman from '../assets/images/woman.png'; //      asset
//import DateTimePicker from 'react-datetime-picker'; //  Datetime picker
//import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
// import PostForm from '../components/PostForm'
const moment = require('moment');

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
  const notify_success = () => {
    toast.success('Uspješno', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const notify_error = () => {
    toast.error('Greška', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
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
    startdate: '',
    enddate: '',
    title: '',
    serviceid: '',
    clientid: '',
  });

  async function submit(e) {
    try {
      e.preventDefault();
      let startDateUnix = moment(data.startdate).unix();
      // let endDateUnix;
      // endDateUnix += data.enddate * 60;
      // console.log(endDateUnix);

      const secs = data.enddate * 60;

      const formatted = moment.utc(secs * 1000).format();
      const endDate = moment(formatted).unix();
      const endDateUnix = moment(startDateUnix) + endDate;
      // console.log(endDateUnix);

      await Axios.post(url, {
        startDate: startDateUnix,
        endDate: endDateUnix,
        title: data.title,
        serviceID: data.serviceid,
        clientID: data.clientid,
      }).then((res) => {
        notify_success();
        console.log(res.data);
      });
    }
    catch (e) {
      console.error("Greška!")
      notify_error();
    }
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    console.log(newdata);
    setData(newdata);
  }
  return (
    <div className="main">
      <div class="flex_row">
        <div class="novaRezervacija_body">
          <h1>Nova rezervacija</h1>
          <div class="break"></div>
          <h6>Potrebno je ispuniti sva polja</h6>
          <div class="break"></div>
          <div class="flex_column">
            <form onSubmit={(e) => submit(e)}>
              <div class="odabir_termina">
                <h2>Odaberite početni datum i vrijeme rezervacije</h2>
                <input
                  onChange={(e) => handle(e)}
                  id="startdate"
                  value={data.startdate}
                  type="datetime-local"
                ></input>
                <div class="odabir_usluga">
                  <h2>Trajanje</h2>
                  <select onChange={(e) => handle(e)} id="enddate" value={data.enddate}>
                    <option>Odaberite trajanje</option>
                    <option value={30}>30 minutes</option>
                    <option value={60}>1 hour</option>
                    <option value={120}>2 hours</option>
                  </select>
                </div>
                <h2>Upišite naziv rezervacije </h2>
                <input onChange={(e) => handle(e)} id="title" value={data.title} type="text"></input>
                <div class="odabir_usluga">
                  <h2>Odabir usluge</h2>

                  <select
                    onChange={(e) => handle(e)}
                    id="serviceid"
                    value={data.serviceid}
                    class="ui_dropdown"
                    required
                  >
                    <option>Odaberite uslugu</option>

                    {services.map((service) => (
                      <option value={service.service_id}>{service.service_name}</option>
                    ))}
                  </select>
                  <div class="break"></div>
                </div>
                <div class="odabir_usluga">
                  <h2>Odabir klijenta</h2>

                  <select
                    onChange={(e) => handle(e)}
                    id="clientid"
                    value={data.clientid}
                    class="ui_dropdown"
                    required
                  >
                    <option>Odaberite klijenta</option>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NovaRezervacija;
