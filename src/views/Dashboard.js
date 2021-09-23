import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Dashboard.css';
import new_reservation from '../assets/images/new_reservation.png';
import finantion_chart from '../assets/images/finantion_chart.png';
import clients_chart from '../assets/images/clients_chart.png';
import { Services } from '../services/index';
import Paper from '@material-ui/core/Paper'; //vizualni dio za kalendar
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  //WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
const currentDate = '2021-08-29';

const schedulerData = [
  { startDate: '2021-08-30T09:45', endDate: '2021-08-30T010:45', title: 'Rezervacija 1' },
  { startDate: '2021-08-30T14:00', endDate: '2021-08-30T16:00', title: 'Rezervacija 2' },
];

function Dashboard() {
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
                <Scheduler data={schedulerData}>
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
