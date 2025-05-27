import axios from 'axios';

// Cấu hình Axios instance để gọi API từ backend
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors để xử lý lỗi và các response
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Xử lý lỗi chung
    if (error.response) {
      // Lỗi từ server với status code
      console.error('API Error:', error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // Lỗi không nhận được response
      console.error('Network Error:', error.request);
      return Promise.reject({ message: 'Lỗi kết nối mạng' });
    } else {
      // Lỗi khác
      console.error('Error:', error.message);
      return Promise.reject({ message: 'Đã xảy ra lỗi' });
    }
  }
);

export default api;
