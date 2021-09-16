import axios from 'axios';

let Service = axios.create({
  baseURL: `http://localhost:5000`,
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
