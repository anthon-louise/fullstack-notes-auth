import {useParams, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'


function EditPage() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        
    })
}

export default EditPage