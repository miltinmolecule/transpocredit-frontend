import axios from "../../../axios";

axios.interceptors.response.use((response) => {
  if (response.status == 200 || response.state == 201) {
    localStorage.setItem('timestamp', new Date.now())
  }
  return response;
}, (err) => {
  if (err.response.status === 400) {
    return err
  } else {
    return Promise.reject(err);
  }
});

export default axios;