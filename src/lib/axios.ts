import axios from 'axios'

// const token = process.env.REACT_APP_GITHUB_TOKEN
const token = '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'

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `token ${token}`,
  }
})
