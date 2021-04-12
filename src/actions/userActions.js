import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/users',
});

export const getUsers = async () => {
  let users = await api.get('/').then(({ data }) => data);
  return users;
};
