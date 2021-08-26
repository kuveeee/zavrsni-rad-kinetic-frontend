import React from 'react';
import '../assets/styles/Usluge.css';
import UslugaPojedinacno from '../components/uslugaPojedinacno';
import plus from '../assets/images/usluge/plus.png';
// import trajanje from '../assets/images/usluge/trajanje.png';
// import cijena from '../assets/images/usluge/cijena.png';

function Usluge() {
  return <div className="main">
    <div class="flex_row">
      <div class="flex_column">
        <div class="body">
          <div class="h1_usluge">
            <h1>Usluge</h1>
          </div>
          <div class="nova_usluga">
            <img src={plus} alt="Dodavanje usluge"></img>
            <h3>Nova usluga</h3>
          </div>
          <div class="flex_row">
            <div class="usluge_tablica">
              <li>NAZIV USLUGE</li>
              <li>TRAJANJE</li>
              <li>CIJENA</li>
            </div>
          </div>
          <UslugaPojedinacno />
          <div class="break"></div>
          <UslugaPojedinacno />
          <div class="break"></div>
          <UslugaPojedinacno />
          <div class="break"></div>
          <UslugaPojedinacno />
          <div class="break"></div>
          <UslugaPojedinacno />
          <div class="break"></div>
          <UslugaPojedinacno />
        </div>
      </div>
    </div>
  </div>;
}

export default Usluge;
