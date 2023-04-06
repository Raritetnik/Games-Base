import axios from 'axios'
export default axios.create({
  baseURL: 'http://localhost:5080/api/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
    // Authorization: 'Bearer ' + localStorage.getItem('token')
  }
})
