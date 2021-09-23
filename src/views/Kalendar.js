import React, { useEffect } from 'react';
import '../assets/styles/Kalendar.css';
import { Link } from 'react-router-dom';
import plus from '../assets/images/usluge/plus.png';
import { Reservations } from '../services/index';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';
const moment = require('moment');
const currentDate = new Date();

function Kalendar() {
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

  return (
    <div className="main">
      <h1>Kalendar</h1>
      <Link style={{ textDecoration: "none" }} exact to="/nova-rezervacija">
        <div class="nova_rezervacija">
          <img src={plus} alt="Dodavanje usluge"></img>
          <h3>Nova rezervacija</h3>
        </div>
      </Link>
      <Paper>
        <Scheduler data={newArray}>
          <ViewState currentDate={currentDate} />
          <WeekView startDayHour={7} endDayHour={16} excludedDays={[0, 6]} />
          <Appointments />
        </Scheduler>
      </Paper>
    </div>
  );
}

export default Kalendar;
