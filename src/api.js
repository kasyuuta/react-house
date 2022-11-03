import axios from 'axios';
import { base_url } from './constants';

const http = axios.create({
  baseURL: base_url,
})

const Api = {
    getHouses: () => http.get('houses'),
    deleteHouses: (id) => http.delete('houses/' + id),
    postHouse: (data) => http.post('houses', data),
    getCars:() => http.get('cars')

}
export default Api;