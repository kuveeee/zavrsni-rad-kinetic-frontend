import React from 'react';
import '../assets/styles/NovaRezervacija.css'
import woman from '../assets/images/woman.png';

function NovaRezervacija() {
  return <div className="main">
    <div class="flex_row">
      <div class="flex_column">
        <div class="body">
          <h1>Nova rezervacija</h1>
          <div class="break"></div>

          <div class="klijent">
            <img class="woman" src={woman} alt="woman"></img>
            <div class="input">
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
              <input type="number"></input>
              <p>Datum rođenja</p>
              <input type="date"></input>
              <p>E-pošta</p>
              <input type="email"></input>
            </div>
          </div>
          <div class="flex_column">
            <div class="odabir_usluga">
              <h2>Odabir usluge</h2>
              <select class="ui dropdown">
                <option value="">Usluge</option>
                <option value="1">Usluga 1</option>
                <option value="0">Usluga 2</option>
                <option value="0">Usluga 3</option>
                <option value="0">Usluga 4</option>
                <option value="0">Usluga 5</option>
              </select>
              <div class="break"></div>
              <button>Kreiraj</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default NovaRezervacija;
