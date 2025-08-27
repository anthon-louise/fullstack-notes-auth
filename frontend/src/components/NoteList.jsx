import Button from "./Button"
import { Link } from 'react-router-dom'

function NoteList({ notes, handleDeleteNote }) {
    return (
        <div>
            <ul>
                {
                    notes.map((note) => (
                        <li key={note.id}>
                            <strong>{note.title}:</strong> {note.content}
                            <Link to={`/edit/${note.id}`}>✏️</Link>
                            <Button label='🗑️' type='submit' onClick={() => handleDeleteNote(note.id)} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default NoteList