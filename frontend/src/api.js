import axios from 'axios';
import { getToken } from './auth';

const API_URL = process.env.REACT_APP_API_URL;
const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(async (config) => {
  const auth = getToken();
  console.log('auth', auth);
  if (auth && auth.token) {
    config.headers.Authorization = `Bearer ${auth.token.token}`;
  }
  return config;
});

export const postUser = async ({
    name,
    email,
    password,
  } = {}) => {
    const response = await api.post('/auth/cadastro', {
      name,
      email,
      password,
    });
    return response;
  };
  
export const getUser = async ({ email, password } = {}) => {
    const response = await api.post('/auth/login', {
      email,
      password,
    });
    return response;
  };
  
