import React from 'react';
import '../assets/styles/Kalendar.css'
//import Calendar from 'react-calendar'
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    //DayView,
    WeekView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2021-08-30';
const schedulerData = [
    { startDate: '2021-08-30T09:45', endDate: '2021-08-30T010:45', title: 'Rezervacija 1' },
    { startDate: '2021-08-30T14:00', endDate: '2021-08-30T16:00', title: 'Rezervacija 2' },
];

function Kalendar() {
    return <div className="main">
        <h1>Kalendar</h1>
        {/* <Calendar start="Decade"/> */}
        <Paper>
            <Scheduler
                data={schedulerData}
            >
                <ViewState
                    currentDate={currentDate}
                />
                <WeekView
                    startDayHour={7}
                    endDayHour={16}
                    excludedDays={[0,6]}
                />
                <Appointments />
            </Scheduler>
        </Paper>
    </div>
}

export default Kalendar;