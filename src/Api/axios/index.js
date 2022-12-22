import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const accesstoken = window.localStorage.getItem('token');
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${accesstoken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.message === 'Network Error' || error.response.status === 401) {
      if (!localStorage.getItem('token')) {
        window.location.href = '/';
        return false;
      }
      localStorage.removeItem('token');
      window.location.href = '/';
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default instance;
