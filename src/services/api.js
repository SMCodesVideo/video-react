import axios from 'axios';

const api = axios.create({
    baseURL: "https://4000-a7c42405-109c-4013-ade4-ee153e2c0421.ws-us02.gitpod.io"
});

export default api;