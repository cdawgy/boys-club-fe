import axios from "axios"
import { store } from "./store/store"
import type { ReduxAuthState } from "./auth/authSlice"

const instance = axios.create({
  baseURL: "http://localhost:1337/api",
})

instance.interceptors.request.use(
  (config) => {
    const state: ReduxAuthState = store.getState()
    const token = state.auth.token
    if (token) {
      config.headers = config.headers || {}
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default instance
