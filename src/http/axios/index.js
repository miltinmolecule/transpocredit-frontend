import axios from '../../axios';

axios.interceptors.response.use((response) => {
  if(response.status == 200 || response.status == 201) {
    localStorage.setItem('timestamp', Date.now())
  }
  return response;
}, (error) => {
  if(error.response.status === 401) {
    return error;
  } else {
    return Promise.reject(error);
  }
})