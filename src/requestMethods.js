import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

let TOKEN;

export const check = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser;

if (check !== null) {
  TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser
    ?.accessToken;
}

export const publicRequest = axios.create({
  baseURL: BASE_URL
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {token: `${TOKEN}`}
});
