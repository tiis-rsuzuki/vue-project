import axios from 'axios'
// import store from '@/store/store'

export default () => {
  const apiUrl = process.env.VUE_APP_API_BASE_URL
  return axios.create({
    baseURL: apiUrl,
    // headers: {
    //   Authorization: `Bearer ${store.state.token}`
    // }
  })
}
