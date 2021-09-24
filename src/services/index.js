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
  async removeClient() {
    let response = await Service.post('/clients/:id');
    return response.data;
  }
};

let Services = {
  async getAllServices() {
    let response = await Service.get('/services');
    return response.data;
  },
};

let Reservations = {
  async getAllReservations() {
    let response = await Service.get('/reservations');
    return response.data;
  },
};

export { Clients, Services, Reservations };

