import axios from 'axios'

export const website = "http://127.0.0.1:8000"
const service = axios.create({
    baseURL: website,
})

/**
 * 响应拦截器
 */
service.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response.data
        }
    })

export default service