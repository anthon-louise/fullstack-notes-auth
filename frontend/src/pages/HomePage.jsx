import { useState } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import { createNote } from "../services/noteService"

function HomePage() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSaveNote = async () => {
        console.log(title, content)
    }

    return (
        <div>
            <Input value={title} label='Title' onChange={setTitle}/>
            <Input value={content} label='Content' onChange={setContent}/>
            <Button label='Add Note' type='submit' onClick={handleSaveNote}/>
        </div>
    )
}

export default HomePage