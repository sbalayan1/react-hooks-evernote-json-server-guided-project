import React from "react";
import NoteList from "./NoteList";

function Sidebar({ filteredNoteData, setFilteredNoteData, clickSideNote, setEditState }) {
    let todaysDate = new Date()

    let newNote = {
        'userid': 1,
        'title': "Title", 
        'body': "Body", 
        'date_created': todaysDate.toDateString()
    }

    let handleClick = () => {
        fetch('http://localhost:3000/notes', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(newNote)
        })
        .then(res => res.json)
        .then(data => setFilteredNoteData([...filteredNoteData, newNote]))
    }


    return (
    <div className="master-detail-element sidebar">
        {/* [ ] Display all notes in the left sidebar. */}
        <select className="sort" > 
            <option>Sort by</option>
            <option>Date created</option>
            <option>Last updated</option>
            <option>Title</option>
            <option>Body</option>
        </select>
        <NoteList 
            filteredNoteData={filteredNoteData} 
            clickSideNote={clickSideNote}
            setEditState={setEditState}
        />
        <button onClick={() => handleClick()}>New</button>
    </div>
  );
}

export default Sidebar;
