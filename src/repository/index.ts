import axios from 'axios'
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000
})

const onRequestSuccess = (config: AxiosRequestConfig) => {
  config.headers = {
    'Content-Type': 'application/json'
  }

  return config as InternalAxiosRequestConfig
}

const onRequestError = (error: AxiosError) => {
  return Promise.reject(error)
}

const onResponseSuccess = (response: AxiosResponse) => {
  if (response.status === 200) {
    return response.data
  }
  return Promise.reject(response)
}

const onResponseError = (error: AxiosError) => {
  return Promise.reject(error)
}

instance.interceptors.request.use(onRequestSuccess, onRequestError)

instance.interceptors.response.use(onResponseSuccess, onResponseError)

export default instance
