import React, { useState, useEffect } from 'react';
import '../assets/styles/Naplacivanje.css';
import { Clients, Services } from '../services';

function Naplacivanje() {
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

    const [data, setData] = useState({
        startdate: '',
        enddate: '',
        title: '',
        serviceid: '',
        clientid: '',
    });

    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }

    return <div className="main">
        <div class="naplacivanje_body">
            <h1>Naplaćivanje</h1>
            <div class="break"></div>
            <h6>Pacijent</h6>
            <div class="break"></div>
            <select onChange={(e) => handle(e)} id="clientid" value={data.clientid} class="ui_dropdown">
                {clients.map((client) => (
                    <option value={client.client_id}>
                        {client.client_first_name + ' ' + client.client_last_name}
                    </option>
                ))}
            </select>
            <div class="break"></div>
            <h6>Dijagnoza</h6>
            <div class="break"></div>
            <select class="ui dropdown">
                <option value="">Dijagnoza</option>
                <option value="1">Dijagnoza</option>
                <option value="0">Dijagnoza</option>
                <option value="2">Dijagnoza</option>
                <option value="3">Dijagnoza</option>
                <option value="4">Dijagnoza</option>
                <option value="5">Dijagnoza</option>
                <option value="6">Dijagnoza</option>
                <option value="7">Dijagnoza</option>
                <option value="8">Dijagnoza</option>
            </select>
            <div class="break"></div>
            <h6>Usluga</h6>
            <div class="break"></div>
            <select
                onChange={(e) => handle(e)}
                id="serviceid"
                value={data.serviceid}
                class="ui_dropdown"
            >
                {services.map((service) => (
                    <option value={service.service_id}>{service.service_name}</option>
                ))}
            </select>
            <div class="break"></div>
            <h6>Cijena</h6>
            <div class="break"></div>
            <input type="text"></input>
            <div class="kreiraj_naplacivanje">
                <button>Kreiraj</button>
            </div>
        </div>
    </div>
}

export default Naplacivanje
