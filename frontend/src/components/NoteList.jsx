import Button from "./Button"

function NoteList({ notes, handleDeleteNote }) {
    return (
        <div>
            <ul>
                {
                    notes.map((note) => (
                        <li key={note.id}>
                            <strong>{note.title}:</strong> {note.content}
                            <Button label='🗑️' type='submit' onClick={() => handleDeleteNote(note.id)}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default NoteList