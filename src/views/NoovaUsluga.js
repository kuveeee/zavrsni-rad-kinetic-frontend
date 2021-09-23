import React, { useState } from 'react'
import Axios from 'axios'
import '../assets/styles/NoovaUsluga.css';
import { toast } from 'react-toastify'; //notifikacije
import 'react-toastify/dist/ReactToastify.css';//Notifications styles

toast.configure()
const notify_success = () => {
    toast.success('🦄 Uspješno', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

const notify_error = () => {
    toast.error('🦄', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

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
        try {
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
            notify_success();
        }
        catch (error) {
            notify_error();
        }
    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return <div className="main">
        <div class="novaUsluga_body">
            <div class="flex_row">
                <h1>Nova usluga</h1>
                <div class="break"></div>
                <div class="klijent">
                    <form onSubmit={(e) => submit(e)}>
                        <div class="input1">
                            <p>Ime usluge</p>
                            <div class="input_ime">
                                <input type="text" onChange={(e) => handle(e)} value={data.service_name} id="service_name"></input>
                            </div>
                            <p>Trajanje usluge</p>
                            <input onChange={(e) => handle(e)} value={data.service_duration} type="number" id="service_duration"></input>
                            <p>Cijena usluge</p>
                            <div class="input_cijena">
                                <input onChange={(e) => handle(e)} value={data.service_price} type="number" id="service_price"></input>
                            </div>
                            <p>Opis usluge</p>
                            <div class="input_opis">
                                <input onChange={(e) => handle(e)} value={data.service_description} type="text" id="service_description"></input>
                            </div>
                            <p>ID usluge</p>
                            <div class="input_id">
                                <input onChange={(e) => handle(e)} value={data.service_id} type="number" id="service_id"></input>
                            </div>
                        </div>
                        <div class="kreiraj">
                            <button>Kreiraj</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    </div>;
}

export default NovaUsluga;
