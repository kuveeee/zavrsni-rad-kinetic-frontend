import React from 'react';
import {toast } from 'react-toastify'; //               Notifications
import 'react-toastify/dist/ReactToastify.css';//       Notifications styles
import '../assets/styles/NovaRezervacija.css'; //       asset
import woman from '../assets/images/woman.png'; //      asset
import DateTimePicker from 'react-datetime-picker'; //  Datetime picker
import { useState } from 'react';

toast.configure()
function NovaRezervacija() {

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
  const notify_success = () => {
    toast.success('🦄', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
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

  const [value, onChange] = useState(new Date());

  return <div className="main">
    <div class="flex_row">
      <div class="flex_column">
        <div class="body">
          <h1>Nova rezervacija</h1>
          <div class="break"></div>
          <div class="klijent">
            <img class="woman" src={woman} alt="woman"></img>
            <div class="input1">
              <p>Ime</p>
              <input type="text"></input>
              <p>Prezime</p>
              <input type="text"></input>
            </div>
            <div class="input2">
              <p>Spol</p>
              <select class="ui dropdown">
                <option value="">Spol</option>
                <option value="1">Muškarac</option>
                <option value="0">Žena</option>
              </select>
              <p>Broj telefona</p>
              <input type="text"></input>
              <p>Datum rođenja</p>
              <input type="date"></input>
              <p>E-pošta</p>
              <input type="email"></input>
            </div>
          </div>
          <div class="flex_column">
            <div class="odabir_usluga">
              <h2>Odabir usluge</h2>
              <select class="ui_dropdown">
                <option value="">Usluge</option>
                <option value="1">Usluga 1</option>
                <option value="0">Usluga 2</option>
                <option value="0">Usluga 3</option>
                <option value="0">Usluga 4</option>
                <option value="0">Usluga 5</option>
              </select>
              <div class="break"></div>
            </div>
            <div class="odabir_dijagnoze">
              <h2>Dijagnoza</h2>
              <input type="text"></input>
              <div class="break"></div>
            </div>
            <div class="odabir_termina">
              <h2>Odabir termina</h2>
              <div className="Sample">
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
              </div>
            </div>
            <div class="kreiraj">
              <button class="button_kreiraj" onClick={notify_success}>Kreiraj</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >;
}
export default NovaRezervacija;
