import { useState, useEffect } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import { createNote, getNotes, deleteNote } from "../services/noteService"
import NoteList from "../components/NoteList"

function HomePage() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [notes, setNotes] = useState([])

    const handleDeleteNote = async (id) => {
        const data = await deleteNote(id)
        alert(data.message)
        fetchNotes()
    }

    const handleSaveNote = async () => {
        const data = await createNote({title, content})
        alert(data.message)
        if (data.success) {
            setTitle('')
            setContent('')
        }
        fetchNotes()
    }

    const fetchNotes = async () => {
        const data = await getNotes()
        setNotes(data.notes)
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <div>
            <Input value={title} label='Title' onChange={setTitle}/>
            <Input value={content} label='Content' onChange={setContent}/>
            <Button label='Add Note' type='submit' onClick={handleSaveNote}/>
            <br />
            <NoteList notes={notes} handleDeleteNote={handleDeleteNote}/>
        </div>
    )
}

export default HomePage