import { create as createAxiosInstance } from 'axios'

const BASE_URL = 'https://api.github.com/'
const instance = createAxiosInstance({
  baseURL: BASE_URL,
})


export default {
  async fetchUser(user) {
    const endpoint = `users/${user}`

    return (await instance.get(endpoint)).data
  },

  async fetchRepos(user, page) {
    const endpoint = `users/${user}/repos?page=${page}&per_page=100`

    return (await instance.get(endpoint)).data
  },
}