import React, { useEffect } from 'react';
import '../assets/styles/Kalendar.css'
import { Reservations } from '../services/index';
//import Calendar from 'react-calendar'
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    //DayView,
    WeekView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
const currentDate = new Date();
//Prikaz rezervacija
const schedulerData = [ 
        { startDate: '2021-09-23T14:00', endDate: '2021-09-23T14:00', title: 'Rezervacija 2' },
        { startDate: '2021-09-21T10:00', endDate: '2021-09-21T12:00', title: 'Title'},
    ];

function Kalendar() {
    //Dohvat rezervacija
    const [reservationsData, setReservationsData] = React.useState([]);
    const getAllReservations = async () => {
        let res = await Reservations.getAllReservations();
        setReservationsData(res);
    };
    useEffect(() => {
        getAllReservations();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div className="main">
        <h1>Kalendar</h1>
        {/* <Calendar start="Decade"/> */}
        <Paper>
            <Scheduler
                data={reservationsData}
            >
                <ViewState
                    currentDate={currentDate}
                />
                <WeekView
                    startDayHour={7}
                    endDayHour={16}
                    excludedDays={[0, 6]}
                />
                <Appointments />
            </Scheduler>
        </Paper>
    </div>
}

export default Kalendar;