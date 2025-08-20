import axios from 'axios'
const API_URL = 'http://localhost:5000/notes'

export async function createNote(body) {
    try {
        const res = await axios.post(`${API_URL}/`, body)
        return res.data
    } catch (err) {
        if (err.response && err.response.data) {
            return err.response.data
        }
        return {success: false, message: err.message}
    }
}