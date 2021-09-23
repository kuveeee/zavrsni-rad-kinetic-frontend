import React, { useState } from 'react'
import Axios from 'axios'
import '../assets/styles/Login.css';
import logo from '../assets/images/logo.png';
import physical_image from '../assets/images/physical2x.png';
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

function Login() {
    const url = "https://kinetic-db.herokuapp.com/admin/login"
    const [data, setData] = useState({
        admin_email: "",
        admin_password: "",
    })
    function submit(e) {
        try {
            e.preventDefault();
            Axios.post(url, {
                email: data.email,
                password: data.password,
            })
                .then(res => {
                    console.log(res.data)
                    notify_success();
                    window.location="/dashboard"
                })
        }
        catch { notify_error(); }
    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return <div className="main">
        <div class="login_body">
            <div class="flex_row">
                <div class="flex_column">
                    <img class="physical_image" src={physical_image} alt="Physical imagee" />
                </div>
                <div class="flex_column">
                    <form onSubmit={(e) => submit(e)}>
                        <div class="login_form">
                            <img class="logo" src={logo} alt="Logo"></img>
                            <div class="break"></div>
                            <div class="h1_login">
                                <h1>Kinetic centar</h1>
                            </div>
                            <div class="break"></div>
                            <div class="dobrodosli">
                                <h2>Dobrodošli natrag! Molimo prijavite se na račun.</h2>
                            </div>
                            <div class="break"></div>
                            <input onChange={(e) => handle(e)} value={data.email} id="email" type="email" placeholder="e-mail"></input>
                            <div class="break"></div>
                            <input onChange={(e) => handle(e)} value={data.password} id="password" type="password" placeholder="zaporka"></input>
                            <div class="break"></div>
                            <button class="prijava">
                                <p>Prijava</p>
                            </button>
                            <div class="break"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>;
}

export default Login;
