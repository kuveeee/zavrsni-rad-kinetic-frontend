import React, { useEffect }  from 'react';
import '../assets/styles/Usluge.css';
import { Link } from 'react-router-dom';
import UslugaPojedinacno from '../components/uslugaPojedinacno';
import plus from '../assets/images/usluge/plus.png';
import { Services } from '../services/index';
// import trajanje from '../assets/images/usluge/trajanje.png';
// import cijena from '../assets/images/usluge/cijena.png';

function Usluge() {
  const [services, setServices] = React.useState([]);

  const getServices = async () => {
    let res = await Services.getAllServices();
    setServices(res);
    console.log(services);
  };
  useEffect(() => {
    getServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div className="main">
    <div class="flex_row">
      <div class="flex_column">
        <div class="body">
          <div class="h1_usluge">
            <h1>Usluge</h1>
          </div>
          <Link style={{ textDecoration: "none" }} exact to="/nova-usluga">
            <div class="nova_usluga">
              <img src={plus} alt="Dodavanje usluge"></img>
              <h3>Nova usluga</h3>
            </div>
          </Link>
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
