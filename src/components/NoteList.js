import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ filteredNoteData, clickSideNote, setEditState }) {
    
  return (
    <ul>
      {/* Render list of notes here... */}
      {filteredNoteData.map(note => {
          return <NoteItem 
            note={note} 
            clickSideNote={clickSideNote} 
            setEditState={setEditState}
            />
      })}
    </ul>
  );
}

export default NoteList;
