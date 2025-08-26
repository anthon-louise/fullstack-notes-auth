
function NoteList({ notes }) {
    return (
        <div>
            <ul>
                {
                    notes.map((note) => (
                        <li key={note.id}>
                            <strong>{note.title}:</strong> {note.content}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default NoteList