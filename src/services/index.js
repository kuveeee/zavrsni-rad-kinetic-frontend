import axios from 'axios';

let Service = axios.create({
  baseURL: `https://kinetic-db.herokuapp.com`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

let Clients = {
  async getAllClients() {
    let response = await Service.get('/clients');
    return response.data;
  },
};

export { Clients };
