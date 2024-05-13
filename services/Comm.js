import axios from "axios"

//axios.defaults.crossDomain = true
axios.defaults.withCredentials = true
axios.defaults.xsrfCookieName = "XSRF-TOKEN"
axios.defaults.xsrfHeaderName = "X-XSRF-TOKEN"

export const DefaultBaseURL = (() => {
  return "/api"
})()

const Comm = axios.create({
  baseURL: DefaultBaseURL,
  timeout: 600000, // value in milliseconds
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true"
  },
})

export default Comm
