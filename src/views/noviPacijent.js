import React from 'react';
import '../assets/styles/noviPacijent.css';
import man from '../assets/images/man.png'; //      asset

function noviPacijent() {
  return <div className="main">
    <div class="noviPacijent_body">
      <div class="flex_row">
        <h1>Novi pacijent</h1>
        <div class="break"></div>
        <div class="klijent">
          <img class="woman" src={man} alt="man"></img>
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
      </div>
      <button><p>Dodaj</p></button>
    </div>
  </div>;
}

export default noviPacijent;
