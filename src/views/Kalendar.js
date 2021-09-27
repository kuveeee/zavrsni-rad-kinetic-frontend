import React, { useEffect } from 'react';
import '../assets/styles/Kalendar.css';
import { Link } from 'react-router-dom';
import plus from '../assets/images/usluge/plus.png';
import { Reservations } from '../services/index';
import Paper from '@material-ui/core/Paper';
import { EditingState, ViewState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import { Service } from '../services/index';

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
      id: reservation.reservation_id,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      title: reservation.title,
    };
  });

  // const removeReservation = async (id) => {
  //   Service.delete(`/reservations/${id}`, reservationsData.reservation_id).then((result) => {
  //     console.log(result, 'deleted');
  //   });
  // };

  // const commitChanges = ({ deleted }) => {
  //   setReservationsData((newArray) => {
  //     let { data } = newArray;
  //     console.log('this data', data);
  //     if (deleted !== undefined) {
  //       data = data.filter((appointment) => appointment.id !== deleted);
  //     }
  //     return { data };
  //   });
  // };

  useEffect(() => {
    getAllReservations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main">
      <div class="flex_row">
        <h1>Kalendar</h1>
        <Link style={{ textDecoration: 'none' }} exact to="/nova-rezervacija">
          <div class="nova_rezervacija_button">
            <img src={plus} alt="Dodavanje usluge"></img>
            <h3>Nova rezervacija</h3>
          </div>
        </Link>
      </div>
      <Paper>
        <Scheduler data={newArray}>
          <ViewState currentDate={currentDate} />
          <EditingState
            onCommitChanges={function commitChanges({ added, changed, deleted }) {
              setReservationsData((id) => {
                let { data } = reservationsData;
                if (deleted !== undefined) {
                  Service.delete(`/reservations/${id}`, reservationsData.reservation_id).then((result) => {
                    console.log(result, 'deleted');
                  });
                }
                return { data };
              });
            }}
          />
          <IntegratedEditing />
          <ConfirmationDialog />
          <WeekView startDayHour={7} endDayHour={16} excludedDays={[0, 6]} />
          <Appointments />
          <AppointmentTooltip showOpenButton showDeleteButton />
          <AppointmentForm />
        </Scheduler>
      </Paper>
    </div>
  );
}

export default Kalendar;
