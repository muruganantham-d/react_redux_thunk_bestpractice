import { api } from '../../services/api'; // Your axios instance

export const loginApi = (email: string, password: string) => {
  return api.post('/users/login', { email, password });
};


export const signupApi = (userData: { name: string; email: string; password: string }) => {
  return api.post('/users/register', userData);
};
