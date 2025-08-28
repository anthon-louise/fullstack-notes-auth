import {useParams, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getNoteById } from '../services/noteService'
import Input from '../components/Input'
import Button from '../components/Button'
import { updateNote } from '../services/noteService'

function EditPage() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    async function fetchNote() {
        const data = await getNoteById(id)
        setTitle(data.note.title)
        setContent(data.note.content)
    }

    async function handleUpdate() {
        const note = {title, content}
        const data = await updateNote(id, note)
        alert(data.message)
        navigate('/')
    }

    useEffect(() => {
        fetchNote()
    }, [])

    return (
        <div>
            <Input label='Title' value={title} onChange={setTitle}/>
            <Input lable='Content' value={content} onChange={setContent}/>
            <Button label='Update Note' onClick={handleUpdate} type='submit'/>
        </div>
    )
}

export default EditPage