import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json; charset=UTF-8",
  },
});

export default API;
