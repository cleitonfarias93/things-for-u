import axios, { AxiosInstance } from 'axios';

const instanceAxios: AxiosInstance = axios.create({
  baseURL: 'https://5d6da1df777f670014036125.mockapi.io/api/v1',
});

export default instanceAxios;
