import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Dashboard.css';
import new_reservation from '../assets/images/new_reservation.png';
import finantion_chart from '../assets/images/finantion_chart.png';
import clients_chart from '../assets/images/clients_chart.png';
import appointment from '../assets/images/appointment.png';
import { Services, Reservations } from '../services/index'; //import funkcija za dohvacanje usluga i rezervacija
import Paper from '@material-ui/core/Paper'; //vizualni dio za kalendar
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  //WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
const currentDate = new Date();
const moment = require('moment');

function Dashboard() {
  const [reservationsData, setReservationsData] = React.useState([]);

  const getAllReservations = async () => {
    let res = await Reservations.getAllReservations();
    setReservationsData(res);
  };

  const newArray = reservationsData.map((reservation) => {
    let startDateTimestamp = reservation.startdate;
    let formattedStartDate = moment.unix(startDateTimestamp).format();

    let endDateTimestamp = reservation.enddate;
    let formattedEndDate = moment.unix(endDateTimestamp).format();

    return {
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      title: reservation.title,
    };
  });

  useEffect(() => {
    getAllReservations();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //Dohvat Usluga
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
  return (
    <div className="main">
      <div class="dashboard_body">
        <div class="flex_row">
          <div class="flex_column">
            <div class="dashboard_body">
              <div class="dashboard_h1">
                <h1>Nadzorna ploča</h1>
              </div>
              <div class="break"></div>
              <Link style={{ textDecoration: 'none' }} exact to="/Kalendar">
                <div class="kalendar">
                  <p>Kalendar</p>
                  <img src={appointment} alt="Slika kalendara"></img>
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }} exact to="/Nova-Rezervacija">
                <div class="nova_rezervacija">
                  <p>Nova rezervacija</p>
                  <img src={new_reservation} alt="Slika za dodavanje nove rezervacije"></img>
                </div>
              </Link>
              <div class="termini">
                <p></p>
              </div>
              <div class="break"></div>
              <Link style={{ textDecoration: 'none' }} exact to="/Klijenti">
                <div class="klijenti">
                  <p>Pacijenti</p>
                  <img src={clients_chart} alt="Graf s klijentima"></img>
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }} exact to="/Fijancije">
                <div class="financije">
                  <p>Financije</p>
                  <img src={finantion_chart} alt="Graf koji prikazuje prihoda"></img>
                </div>
              </Link>
              <div class="break"></div>
              <Link style={{ textDecoration: 'none' }} exact to="/Usluge">
                <div class="usluge">
                  <p>Usluge</p>
                  <div class="dashboard_tablica">
                    <li>Naziv usluge</li>
                    <li>Trajanje</li>
                    <li>Cijena</li>
                  </div>
                  {services.map((service) => (
                    <div class="dashboard_tablica">
                      <li>{service.service_name}</li>
                      <li>{service.service_duration}</li>
                      <li>{service.service_price}</li>
                    </div>
                  ))}
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }} exact to="/naplacivanje">
                <div class="naplacivanje">
                  <p>Naplaćivanje</p>
                </div>
              </Link>
              <Paper>
                <Scheduler data={newArray}>
                  <ViewState currentDate={currentDate} />
                  <DayView
                    startDayHour={7}
                    endDayHour={16}
                    excludedDays={[0, 6]} //Ne prikazujemo subotu i nedjelju
                  />
                  <Appointments />
                </Scheduler>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
