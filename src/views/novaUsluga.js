import React from 'react';
import '../assets/styles/novaUsluga.css';

function NovaUsluga() {
    return <div className="main">
        <div class="novaUsluga_body">
            <div class="flex_row">
                <h1>Nova usluga</h1>
                <div class="break"></div>
                <div class="klijent">
                    <div class="input1">
                        <p>Ime usluge</p>
                        <div class="input_ime">
                            <input type="text"></input>
                        </div>
                        <p>Trajanje usluge</p>
                        <input type="text"></input>
                        <p>Cijena usluge</p>
                        <div class="input_cijena">
                            <input type="text"></input>
                        </div>
                    </div>
                </div>
            </div>
            <button>Dodaj</button>
        </div>
    </div>;
}

export default NovaUsluga;
