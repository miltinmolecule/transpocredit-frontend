import axios from "axios"

const APP_DOMAIN = "";
let baseURL = "";

if (process.env.NODE_ENV === 'production') {
  baseURL = ""
}
export default axios.create({
  APP_DOMAIN,
  baseURL: baseURL
})