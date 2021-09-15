import React from 'react';
import '../assets/styles/clientSearch.css';
import * as Icons from '@material-ui/icons';

function ClientSearch() {
    return <div class="client_search">
        <div class="search">
            <Icons.Search />
            <input placeholder="Pretraga pacijenata"></input>
        </div>
    </div>
}

export default ClientSearch