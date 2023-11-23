import axios from "axios";

const BASE_URL = "http://localhost:3000";

export function getEvents() {
  return axios.get(`${BASE_URL}/events`);
}

export function getEvent(id) {
  return axios.get(`${BASE_URL}/events/${id}`);
}

export function getUsers() {
  return axios.get(`${BASE_URL}/users`);
}

export function getUser(id) {
  return axios.get(`${BASE_URL}/users/?id=${id}`);
}

export function getUserByName(name) {
  return axios.get(`${BASE_URL}/users?q=${name}`);
}

export function getCategories() {
  return axios.get(`${BASE_URL}/categories`);
}

export function getCategory(id) {
  let cat = axios.get(`${BASE_URL}/categories/${id}`);
  return console.log(cat);
}
