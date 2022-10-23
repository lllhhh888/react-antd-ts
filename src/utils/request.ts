import { Axios } from 'axios'

const interce = new Axios({
  baseURL: 'http://127.0.0.1'
})

interce.interceptors.request.use((config) => {
  return config
})

interce.interceptors.response.use((response) => {
  return response
})

export default interce.request
