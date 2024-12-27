import axios from "axios";

// Create an Axios instance
const instance = axios.create({
  baseURL: "http://localhost:5000", // Your backend server URL
});

export default instance;
