import axios from "../../../axios"

export default {
  requestProfileOtp(payload) {
    return axios.post("/profile/request-otp", payload)
  },
  registerProfile(payload) {
    return axios.post("/profile/web", payload);
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