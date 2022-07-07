import axios from "axios";

const API = axios.create({
  baseURL: "https://sarisari-tracker.herokuapp.com/api",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json; charset=UTF-8",
  },
});

export default API;
