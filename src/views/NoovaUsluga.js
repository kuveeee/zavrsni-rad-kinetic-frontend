import React, { useState } from 'react'
import Axios from 'axios'
import '../assets/styles/NoovaUsluga.css';

function NovaUsluga() {
    const url = "https://kinetic-db.herokuapp.com/services"
    const [data, setData] = useState({
        service_id: "",
        service_name: "",
        service_description: "",
        service_duration: "",
        service_price: "",
    })
    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            service_id: data.service_id,
            service_name: data.service_name,
            service_description: data.service_description,
            service_duration: data.service_duration,
            service_price: data.service_price,
        })
            .then(res => {
                console.log(res.data)
            })
    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return <div className="main">
        <div class="novaUsluga_body">
            <form onSubmit={(e) => submit(e)}>
                <div class="flex_row">
                    <h1>Nova usluga</h1>
                    <div class="break"></div>
                    <div class="klijent">
                        <div class="input1">
                            <p>Ime usluge</p>
                            <div class="input_ime">
                                <input type="text" onChange={(e) => handle(e)} value={data.service_name}></input>
                            </div>
                            <p>Trajanje usluge</p>
                            <input onChange={(e) => handle(e)} value={data.service_duration} type="number"></input>
                            <p>Cijena usluge</p>
                            <div class="input_cijena">
                                <input onChange={(e) => handle(e)} value={data.service_price} type="number"></input>
                            </div>
                            <p>Opis usluge</p>
                            <div class="input_opis">
                                <input onChange={(e) => handle(e)} value={data.service_description} type="text"></input>
                            </div>
                            <p>ID usluge</p>
                            <div class="input_id">
                                <input onChange={(e) => handle(e)} value={data.service_id} type="number"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="kreiraj">
                    <button>Kreiraj</button>
                </div>
            </form>
        </div>
    </div>;
}

export default NovaUsluga;
