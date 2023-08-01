import axios from 'axios'
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com'

const instance: AxiosInstance = axios.create({
  baseURL,
  timeout: 1000
})

const onRequestSuccess = (config: AxiosRequestConfig) => {
  config.headers = {
    ...config.headers,
    'Content-Type': 'application/json'
  }
  return config as InternalAxiosRequestConfig
}

const onResponseSuccess = (response: AxiosResponse) => {
  if (response.status === 200) {
    return response
  }
  return Promise.reject(response)
}

const onRequestError = (error: AxiosError) => {
  return Promise.reject(error)
}

instance.interceptors.request.use(onRequestSuccess, onRequestError)
instance.interceptors.response.use(onResponseSuccess, onRequestError)

export default instance
