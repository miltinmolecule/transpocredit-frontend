import axios from "../../../axios"

export default {
  registerProfile(payload) {
    return axios.post("", payload);
  },
  registVehicleDetails(payload) {
    return axios.post("", payload);
  },
  registerTerms(payload) {
    return axios.post("", payload);
  },
  registerGuarantor(payload) {
    return axios.post("", payload);
  }
}   