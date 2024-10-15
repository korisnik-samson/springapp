import axios, { AxiosInstance } from 'axios';

const ApiInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/',
});

export default ApiInstance;