import axiosApi from '../untils/axios'

export default function userRegister(values) {
  axiosApi.post('/userRegister', { values })
    .then(({ data }) => data.data)
}