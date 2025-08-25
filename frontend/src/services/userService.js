import axios from 'axios'
const API_URL = 'http://localhost:5000/users'

export async function auth () {
    try {
        const res = await axios.get(`http://localhost:5000/auth`, {
            withCredentials: true
        })
        return res.data
    } catch (err) {
        {success: false}
    }
}

export async function registerUser (credentials) {
    try {
        const res = await axios.post(`${API_URL}/register`, credentials, {withCredentials: true})
        return res.data
    } catch (err) {
        if (err.response && err.response.data) {
            return err.response.data
        }
        return {success: false, message: err.message}
    }
}

export async function loginUser (credentials) {
    try {
        const res = await axios.post(`${API_URL}/login`, credentials, {withCredentials: true})
        return res.data
    } catch (err) {
        if (err.response && err.response.data) {
            return err.response.data
        }
        return {sucess: false, message: err.message}
    }
}