import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 300000,
});

// api.interceptors.request.use(async (config: AxiosRequestConfig) => {
//   const token = localStorage.getItem(SESSION_USER_TOKEN);
//   const configs = config;

//   if (token) {
//     configs.headers.Authorization = `Bearer ${token}`;
//   }

//   return { ...configs };
// });

export default api;
