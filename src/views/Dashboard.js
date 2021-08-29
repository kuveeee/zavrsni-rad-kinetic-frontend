import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from '@material-ui/icons';
import '../assets/styles/Dashboard.css';

import Paper from '@material-ui/core/Paper';
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
  return <div className="main">
    <div class="dashboard_body">
      <div class="flex_row">
        <div class="flex_column">
          <div class="dashboard_body">
            <div class="dashboard_h1">
              <h1>Nadzorna ploča</h1>
            </div>
            <div class="break"></div>
            <Link exact to="/Kalendar">
              <div class="kalendar" >
                <p>Kalendar</p>
              </div>
            </Link>
            <Link exact to="/Nova-Rezervacija">
              <div class="nova_rezervacija" >
                <p>Nova rezervacija</p>
                <Icons.Add />
              </div>
            </Link>
            <div class="termini">
              <p></p>
            </div>
            <div class="break"></div>
            <Link exact to="/Klijenti">
              <div class="klijenti" >
                <p>Klijenti</p>
                <Icons.Group />
                <div class="break"></div>
                <p>250</p>
              </div>
            </Link>
            <div class="financije" >
              <p>Financije</p>
            </div>
            <div class="break"></div>
            <Link exact to="/Usluge">
              <div class="usluge" >
                <p>Usluge</p>
                <div class="tablica">
                  <ul>
                    <ol>
                      <h3>Naziv usluge</h3>
                    </ol>
                  </ul>
                </div>
              </div>
            </Link>
            <Link exact to="/Naplaćivanje">
              <div class="naplacivanje" >
                <p>Naplaćivanje</p>
              </div>
            </Link>
            <Paper>
              <Scheduler
                data={schedulerData}
              >
                <ViewState
                  currentDate={currentDate}
                />
                <DayView
                  startDayHour={7}
                  endDayHour={16}
                  excludedDays={[0, 6]}
                />
                <Appointments />
              </Scheduler>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Dashboard;
