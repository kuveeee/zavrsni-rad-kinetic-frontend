import React from 'react';
import * as Icons from '@material-ui/icons';
import '../assets/styles/Profil.css';

function Profil() {
    return <div className="main">
        <div class="profil_body">
            <h1>Profil</h1>
            <div class="break"></div>
            <div class="profil">
                <p>Roberto Čaćan</p>
                <Icons.Person />
                <div class="input">
                    <p>Ime</p>
                    <input type="text"></input>
                    <p>Prezime</p>
                    <input type="text"></input>
                    <p>Broj telefona</p>
                    <input type="text"></input>
                    <p>Datum rođenja</p>
                    <p>21.10.1999</p>
                    <p>E-pošta</p>
                    <input type="text"></input>
                </div>
            </div>
        </div>
    </div >
}

export default Profil;
