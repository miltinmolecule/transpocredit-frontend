import axios from '../../axios/index.js'

export default {
  fetchBrands() {
    return axios.get("/all-brands")
  },
  fetchModels(payload){
    return axios.get(`${payload}`)
  },
  fetchAvailableVehicle(payload) {
    return axios.get(`${payload}`)
  }
}