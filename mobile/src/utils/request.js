import axios from 'axios'
import { BACKEND_URL } from '../constants'

export const domain = BACKEND_URL.endsWith('/') ? BACKEND_URL.substr(0, BACKEND_URL.length - 1) : BACKEND_URL

//  Add Base URL and change snake_case to camelCase
const baseAxios = axios.create({
    baseURL: `${domain}/api`,
})

export default baseAxios
