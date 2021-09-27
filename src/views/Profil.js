import React from 'react';
//import * as Icons from '@material-ui/icons';
import '../assets/styles/Profil.css';
//import user from '../assets/images/user.png';
import woman from '../assets/images/woman.png';

function Profil() {
  return (
    <div className="main">
      <div class="profil_body">
        <h1>Profil</h1>
        <div class="break"></div>
        <div class="profil">
          <div class="break"></div>
          <img class="woman" src={woman} alt="woman"></img>
          <div class="break"></div>
          <div class="input">
            <p>Ime</p>
            <input type="text" placeholder="Roberto"></input>
            <div class="break"></div>
            <p>Prezime</p>
            <input type="text" placeholder="Čaćan"></input>
            <p>Broj telefona</p>
            <input type="text" placeholder="00000000"></input>
            <p>Datum rođenja</p>
            <input type="text" placeholder="21.10.1999"></input>
            <p>E-pošta</p>
            <input type="text" placeholder="email@mail.com"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
