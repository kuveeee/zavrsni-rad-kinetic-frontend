import React from 'react';
import '../assets/styles/Naplacivanje.css';

function Naplacivanje() {
    return <div className="main">
        <div class="naplacivanje_body">
            <h1>Naplaćivanje</h1>
            <div class="break"></div>
            <h6>Pacijent</h6>
            <div class="break"></div>
            <select class="ui dropdown">
                <option value="">Pacijent</option>
                <option value="1">Saaed Kay</option>
                <option value="0">Saaed Kay</option>
                <option value="2">Saaed Kay</option>
                <option value="3">Saaed Kay</option>
                <option value="4">Saaed Kay</option>
                <option value="5">Saaed Kay</option>
                <option value="6">Saaed Kay</option>
                <option value="7">Saaed Kay</option>
                <option value="8">Saaed Kay</option>
            </select>
            <div class="break"></div>
            <h6>Dijagnoza</h6>
            <div class="break"></div>
            <select class="ui dropdown">
                <option value="">Dijagnoza</option>
                <option value="1">Dijagnoza</option>
                <option value="0">Dijagnoza</option>
                <option value="2">Dijagnoza</option>
                <option value="3">Dijagnoza</option>
                <option value="4">Dijagnoza</option>
                <option value="5">Dijagnoza</option>
                <option value="6">Dijagnoza</option>
                <option value="7">Dijagnoza</option>
                <option value="8">Dijagnoza</option>
            </select>
            <div class="break"></div>
            <h6>Usluga</h6>
            <div class="break"></div>
            <select class="ui dropdown">
                <option value="">Usluga</option>
                <option value="1">Usluga</option>
                <option value="0">Usluga</option>
                <option value="2">Usluga</option>
                <option value="3">Usluga</option>
                <option value="4">Usluga</option>
                <option value="5">Usluga</option>
                <option value="6">Usluga</option>
                <option value="7">Usluga</option>
                <option value="8">Usluga</option>
            </select>
            <div class="break"></div>
            <h6>Cijena</h6>
            <div class="break"></div>
            <input type="text"></input>
            <div class="kreiraj_naplacivanje">
              <button>Kreiraj</button>
            </div>
        </div>
    </div>
}

export default Naplacivanje
