import React from "react";

function NoteViewer({ selectedNote, setEditState }) {
    let handleClick = () => {
        setEditState(true)
    }

    console.log(selectedNote.date_created)
    console.log(selectedNote.date_edited)

    return (
    <>
        <h1>{selectedNote.title}</h1>
        {selectedNote.date_created===undefined ? null : <h3>Date Created: {selectedNote.date_created}</h3>}
        <p>{selectedNote.body}</p>
        {selectedNote.date_edited===undefined ? null : <small><i>Last updated: {selectedNote.date_edited}</i></small>}
        <p></p>
        <button onClick={() => handleClick()}>Edit</button>
    </>
    );
}

export default NoteViewer;
