import React from "react";

function NoteItem({ note, clickSideNote, setEditState }) {
    let truncateString = (str, num) => {
        // If the length of str is less than or equal to num
        // just return str--don't truncate it.
        if(str.length<=num){
            return str
        }else{
            // Return str truncated with '...' concatenated to the end of str.
            return str.slice(0,num) + '....'
        }
    }

    let handleClick = () => {
        clickSideNote(note)
        setEditState(false)
    }

    return (
    <li key={note.id} onClick={handleClick}>
        <h2>{note.title}</h2>
        {note.date_created===undefined ? null : <h4>Date Created: {note.date_created} </h4>}
        <p>{truncateString(note.body, 20)}</p>
        {note.date_edited===undefined ? null : <small><i>Last updated: {note.date_edited}</i></small>}
    </li>
  );
}

export default NoteItem;
