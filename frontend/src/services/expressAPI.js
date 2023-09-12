import axios from "axios"

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
})

export const getCSRFToken = async () => {
  const { data } = await instance.get("/csrf-token")

  instance.defaults.headers = {
    ...instance.defaults.headers,
    "X-Csrf-Token": data.csrfToken,
  }
}

export default instance
