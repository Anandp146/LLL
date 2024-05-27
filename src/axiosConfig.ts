// src/axiosConfig.ts
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000", // Replace with your API base URL
});

export default instance;
