import axios from "axios"

const APP_DOMAIN = "";
let baseURL = "https://www.transpocredit.com/api";

if (process.env.NODE_ENV === 'production') {
  baseURL = "https://www.transpocredit.com/api"
}
export default axios.create({
  APP_DOMAIN,
  baseURL: baseURL
})