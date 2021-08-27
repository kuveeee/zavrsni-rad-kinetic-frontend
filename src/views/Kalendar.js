import React from 'react';
import '../assets/styles/Kalendar.css'
import Calendar from 'react-calendar'

function Kalendar() {
    return <div>
        <h1>Kalendar</h1>
        <Calendar start="Decade"/>
    </div>
}

export default Kalendar;