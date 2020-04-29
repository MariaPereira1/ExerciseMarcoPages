import axios from "axios";

const requester = axios.create({
  baseURL: "http://localhost:3000",
  responseType: "json"
});

export default requester;
