import axios from 'axios';

const API_URL = 'http://localhost:3306'; // Change if needed

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/api/login/`, credentials);
  return response.data;
};