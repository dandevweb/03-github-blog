import axios from 'axios'

const token = process.env.REACT_APP_GITHUB_TOKEN

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `token ${token}`,
  }
})
