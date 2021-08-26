import React from 'react'
import '../assets/styles/uslugaPojedinacno.css';

function uslugaPojedinacno() {
    return (
        <div>
            <div class="flex_row">
            <div class="rectangle">
              <div class="flex_column">
                <div class="usluga">
                  <p>Usluga 1</p>
                </div>
              </div>
              <div class="flex_column">
                <div class="trajanje">
                  <p>Trajanje:   <strong>60min</strong></p>
                </div>
              </div>
              <div class="flex_column">
                <div class="cijena">
                  <p>Cijena:   <strong>250kn</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default uslugaPojedinacno
