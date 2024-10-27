import axios from "axios";

const BASE_URL: string = "https://rickandmortyapi.com/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
