import React, { useState } from 'react'
import Axios from 'axios'
import '../assets/styles/noviPacijent.css';
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

function NoviPacijent() {
  const url = "https://kinetic-db.herokuapp.com/clients"
  const [data, setData] = useState({
    client_first_name: "",
    client_last_name: "",
    client_sex: "",
    client_phone_number: "",
    client_birth_date: "",
    client_email: "",
  })
  function submit(e) {
    try {
      e.preventDefault();
      Axios.post(url, {
        client_first_name: data.client_first_name,
        client_last_name: data.client_last_name,
        client_sex: data.client_sex,
        client_phone_number: data.client_phone_number,
        client_birth_date: data.client_birth_date,
        client_email: data.client_email
      })
        .then(res => {
          console.log(res.data)
          notify_success();
        })
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
    <div class="noviPacijent_body">
      <div class="flex_row">
        <h1>Novi pacijent</h1>
        <div class="break"></div>
        <div class="klijent">
          <form onSubmit={(e) => submit(e)}>
            {/* <img class="woman" src={woman} alt="woman"></img> */}
            <div class="input1">
              <p>Ime</p>
              <input type="text" onChange={(e) => handle(e)} id="client_first_name" value={data.client_first_name}></input>
              <p>Prezime</p>
              <input type="text" onChange={(e) => handle(e)} id="client_last_name" value={data.client_last_name}></input>
            </div>
            <div class="input2">
              <p>Spol</p>
              <select class="ui dropdown" onChange={(e) => handle(e)} id="client_sex" value={data.client_sex}>
                <option value="">Spol</option>
                <option value="M">Muškarac</option>
                <option value="Ž">Žena</option>
              </select>
              <p>Broj telefona</p>
              <input type="text" onChange={(e) => handle(e)} id="client_phone_number" value={data.client_phone_number}></input>
              <p>Datum rođenja</p>
              <input type="date" onChange={(e) => handle(e)} id="client_birth_date" value={data.client_birth_date}></input>
              <p>E-pošta</p>
              <input type="email" onChange={(e) => handle(e)} id="client_email" value={data.client_email}></input>
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

export default NoviPacijent;
