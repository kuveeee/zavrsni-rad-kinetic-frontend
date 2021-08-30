import React from 'react';
import '../assets/styles/Klijenti.css';
import * as Icons from '@material-ui/icons';
import plus from '../assets/images/usluge/plus.png';

function Klijenti() {
  return <div className="main">
    <div class="klijenti_body">
      <div class="flex_row">
        <h1 class="h1">Klijenti</h1>
        <div class="novi_klijent">
          <img src={plus} alt="Dodavanje novog klijenta"></img>
          <h3>Novi klijent</h3>
        </div>
      </div>
      <div class="flex_row">
        <div class="client_search">
          <div class="search">
            <Icons.Search />
            <input placeholdertext="place"></input>
          </div>
        </div>
      </div>
      <div class="flex_row">
        <div class="klijenti_tablica">
          <li>IME I PREZIME</li>
          <li>KONTAKT BROJ</li>
          <li>E-POŠTA</li>
          <li>DATUM ROĐENJA</li>
          <li>SPOL</li>
        </div>
        <div class="klijent_box">
          <li><strong>Saaed Kay</strong></li>
          <li>+1-252-7284</li>
          <li>saaedkay@gmail.com</li>
          <li>21.10.1999</li>
          <li>M</li>
        </div>
        <div class="klijent_box">
          <li><strong>Saaed Kay</strong></li>
          <li>+1-252-7284</li>
          <li>saaedkay@gmail.com</li>
          <li>21.10.1999</li>
          <li>M</li>
        </div>
        <div class="klijent_box">
          <li><strong>Saaed Kay</strong></li>
          <li>+1-252-7284</li>
          <li>saaedkay@gmail.com</li>
          <li>21.10.1999</li>
          <li>M</li>
        </div>
        <div class="klijent_box">
          <li><strong>Saaed Kay</strong></li>
          <li>+1-252-7284</li>
          <li>saaedkay@gmail.com</li>
          <li>21.10.1999</li>
          <li>M</li>
        </div>
        <div class="klijent_box">
          <li><strong>Saaed Kay</strong></li>
          <li>+1-252-7284</li>
          <li>saaedkay@gmail.com</li>
          <li>21.10.1999</li>
          <li>M</li>
        </div>
        <div class="klijent_box">
          <li><strong>Saaed Kay</strong></li>
          <li>+1-252-7284</li>
          <li>saaedkay@gmail.com</li>
          <li>21.10.1999</li>
          <li>M</li>
        </div>
        <div class="klijent_box">
          <li><strong>Saaed Kay</strong></li>
          <li>+1-252-7284</li>
          <li>saaedkay@gmail.com</li>
          <li>21.10.1999</li>
          <li>M</li>
        </div>
        <div class="klijent_box">
          <li><strong>Saaed Kay</strong></li>
          <li>+1-252-7284</li>
          <li>saaedkay@gmail.com</li>
          <li>21.10.1999</li>
          <li>M</li>
        </div>
        <div class="klijent_box">
          <li><strong>Saaed Kay</strong></li>
          <li>+1-252-7284</li>
          <li>saaedkay@gmail.com</li>
          <li>21.10.1999</li>
          <li>M</li>
        </div>
        <div class="klijent_box">
          <li><strong>Saaed Kay</strong></li>
          <li>+1-252-7284</li>
          <li>saaedkay@gmail.com</li>
          <li>21.10.1999</li>
          <li>M</li>
        </div>
        <div class="klijent_box">
          <li><strong>Saaed Kay</strong></li>
          <li>+1-252-7284</li>
          <li>saaedkay@gmail.com</li>
          <li>21.10.1999</li>
          <li>M</li>
        </div>
      </div>
    </div>
  </div>;
}

export default Klijenti;
