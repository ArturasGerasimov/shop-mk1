import axios from 'axios'

const axiosApi = axios.create({
  baseURL: 'http://localhost/api/v1/',
});

axiosApi.interceptors.response.use(
  null,
  err => {
    const { response } = err

    if (!response) {
      return Promise.reject(err)
    }

    // If response has an error message set it to Error instance
    if (typeof response.data.message !== 'undefined') {
      err.message = response.data.message
    }

    return Promise.reject(err)
  }
)

export default axiosApi;