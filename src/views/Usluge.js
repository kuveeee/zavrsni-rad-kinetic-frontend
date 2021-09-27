import React, { useEffect, useState } from 'react';
// import Axios from 'axios'
import '../assets/styles/Usluge.css';
import { Link } from 'react-router-dom';
import plus from '../assets/images/usluge/plus.png';
import { Service, Services } from '../services/index';
import { toast } from 'react-toastify'; //               Notifications
import 'react-toastify/dist/ReactToastify.css'; //       Notifications styles
// import trajanje from '../assets/images/usluge/trajanje.png';
// import cijena from '../assets/images/usluge/cijena.png';

function Usluge() {
  //Notifications
  const notify_success = () => {
    toast.success('Uspješno', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  const notify_error = () => {
    toast.error('Greška', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const [data,] = useState({
    service_id: '',
  });
  // const url = `https://kinetic-db.herokuapp.com/service/${data.service_id}`
  // function submit(e) {
  //   try {
  //     e.preventDefault();
  //     Axios.delete(url, {
  //       id: data.service_id,
  //     })
  //       .then(res => {
  //         console.log(res.data)
  //       })
  //   }
  //   catch (error) {
  //   }
  // }
  // function handle(e) {
  //   const newdata = { ...data }
  //   newdata[e.target.id] = e.target.value
  //   setData(newdata)
  //   console.log(newdata)
  // }

  //Brisanje usluge
  //NAPOMENA: Ako je usluga unutar neke rezervacije, ona se nece moci obrisati
  const removeService = async (id) => {
    try {
      await Service.delete(`/service/${id}`, data.service_id).then((result) => {
        notify_success();
      });
    } catch (error) {
      notify_error();
    }
  };

  //dohvat usluga
  const [services, setServices] = React.useState([]);
  const getServices = async () => {
    let res = await Services.getAllServices();
    setServices(res);
    console.log(services);
  };
  useEffect(() => {
    getServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>
    <div className="main">
      <div class="flex_row">
        <div class="flex_column">
          <div class="body">
            <div class="h1_usluge">
              <h1>Usluge</h1>
            </div>
            <Link style={{ textDecoration: "none" }} exact to="/nova-usluga">
              <div class="nova_usluga">
                <img src={plus} alt="Dodavanje usluge"></img>
                <h3>Nova usluga</h3>
              </div>
            </Link>
            <div class="flex_row">
              <div class="usluge_tablica">
                <li>NAZIV USLUGE</li>
                <li>TRAJANJE</li>
                <li>CIJENA</li>
                <li>OPIS</li>
              </div>
            </div>
            <div>
              {services.map((service) => (
                <div class="flex_row">
                  <div class="rectangle">
                    <div class="flex_column">
                      <div class="usluga">
                        <p>{service.service_name}</p>
                      </div>
                    </div>
                    <div class="flex_column">
                      <div class="trajanje">
                        <p>Trajanje:   <strong>{service.service_duration}</strong></p>
                      </div>
                    </div>
                    <div class="flex_column">
                      <div class="cijena">
                        <p>Cijena:   <strong>{service.service_price}</strong></p>
                      </div>
                    </div>
                    <div class="flex_column">
                      <div class="opis">
                        <p>{service.service_description}</p>
                      </div>
                    </div>
                    <button onClick={() => removeService(service.service_id)}>Delete</button>
                  </div>

                </div>
              ))
              }
            </div>
            <div class="break"></div>
            {/* <div class="brisanje">
              <p>Brisanje</p>
              <button onClick={() => removeService(service.service_id)}>Delete</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>;
  </div>
}

export default Usluge;
