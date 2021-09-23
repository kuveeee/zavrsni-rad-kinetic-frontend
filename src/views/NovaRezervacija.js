import React, { useState } from 'react'
import Axios from 'axios'
//import { toast } from 'react-toastify'; //               Notifications
import 'react-toastify/dist/ReactToastify.css';//       Notifications styles
import '../assets/styles/NovaRezervacija.css'; //       asset
// import woman from '../assets/images/woman.png'; //      asset
//import DateTimePicker from 'react-datetime-picker'; //  Datetime picker
//import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
// import PostForm from '../components/PostForm'

// toast.configure()
function NovaRezervacija() {

  // {notify_success} za pozivanje notifikacije

  // const notify = () => {
  //   toast('🦄', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // }
  // const notify_success = () => {
  //   toast.success('🦄', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // }
  // const notify_error = () => {
  //   toast.error('🦄', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // }
  // const notify_info = () => {
  //   toast.info('🦄', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // }
  // const notify_warning = () => {
  //   toast.warn('🦄', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // }
  const url = "https://kinetic-db.herokuapp.com/reservations"
  const [data, setData] = useState({
    reservation_serviceID: "",
    reservation_start: "",
    reservation_end: "",
    reservation_name: "",
  })

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      reservation_start: data.reservation_start,
      reservation_end: data.reservation_end,
      reservation_name: data.reservation_name,
      reservation_serviceID: data.serviceID,
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
    <div class="flex_row">
      <div class="novaRezervacija_body">
        <h1>Nova rezervacija</h1>
        <div class="break"></div>
        {/* <div class="grayed_out">
            <div class="klijent">
              <img class="woman" src={woman} alt="woman"></img>
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
                  <option value="1">Muškarac</option>
                  <option value="0">Žena</option>
                </select>
                <p>Broj telefona</p>
                <input type="text" onChange={(e) => handle(e)} id="client_phone_number" value={data.client_phone_number}></input>
                <p>Datum rođenja</p>
                <input type="date" onChange={(e) => handle(e)} id="client_birth_date" value={data.client_birth_date}></input>
                <p>E-pošta</p>
                <input type="email" onChange={(e) => handle(e)} id="client_email" value={data.client_email}></input>
              </div>
            </div>
            <div class="kreiraj">
              <button>Kreiraj</button>
            </div>
          </div> */}
        <div class="flex_column">
          <form onSubmit={(e) => submit(e)}>
            <div class="odabir_termina">
              <h2>Odaberite početni datum i vrijeme rezervacije</h2>
              <input onChange={(e) => handle(e)} value={data.reservation_start} type="datetime-local"></input>
              <h2>Odaberite krajnji datum i vrijeme rezervacije</h2>
              <input onChange={(e) => handle(e)} value={data.reservation_end} type="datetime-local"></input>
              <h2>Upišite naziv rezervacije</h2>
              <input onChange={(e) => handle(e)} value={data.reservation_name} type="text"></input>
              <div class="odabir_usluga">
                <h2>Odabir usluge</h2>
                <select onChange={(e) => handle(e)} value={data.reservation_serviceID} class="ui_dropdown">
                  <option value="">Usluge</option>
                  <option value="1">Usluga 1</option>
                  <option value="0">Usluga 2</option>
                  <option value="0">Usluga 3</option>
                  <option value="0">Usluga 4</option>
                  <option value="0">Usluga 5</option>
                </select>
                <div class="break"></div>
              </div>
              <div class="kreiraj">
                <button>Kreiraj</button>
              </div>
              {/* <div className="Sample">
                  <div className="Sample__container">
                    <main className="Sample__container__content">
                      <DateTimePicker
                        amPmAriaLabel="Select AM/PM"
                        calendarAriaLabel="Toggle calendar"
                        clearAriaLabel="Clear value"
                        dayAriaLabel="Day"
                        hourAriaLabel="Hour"
                        minuteAriaLabel="Minute"
                        monthAriaLabel="Month"
                        nativeInputAriaLabel="Date and time"
                        onChange={onChange}
                        secondAriaLabel="Second"
                        value={value}
                        yearAriaLabel="Year"
                        maxDetail="minute" //ograničavanje na sate i minute, sekunde nam ne trebaju
                      />
                    </main>
                  </div>
                </div> */}
            </div>
            <div class="grayed_out">
              <div class="odabir_dijagnoze">
                <h2>Dijagnoza</h2>
                <input type="text"></input>
                <div class="break"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div >;
}
export default NovaRezervacija;
