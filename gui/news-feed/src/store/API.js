import axios from 'axios';

let api = axios.create({
    baseURL: `/api`, 
});

api.interceptors.request.use((config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem('access')}`
})

export default api