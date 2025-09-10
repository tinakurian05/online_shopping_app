import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000'; // ✅ Django backend

export const fetchWatches = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/products/`);
    return response.data;
  } catch (error) {
    console.error('Axios error in fetchWatches:', error.message);
    throw error;
  }
};
