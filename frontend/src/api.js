import axios from 'axios';

const api = axios.create({
    baseURL: 'https://task-manager-backend-4cx9.onrender.com/api/',
});

export default api;
