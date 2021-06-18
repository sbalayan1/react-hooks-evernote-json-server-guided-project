import { React, useEffect, useState }  from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

let notesAPI = 'http://localhost:3000/notes'
let usersAPI = 'http://localhost:3000/users'

function NoteContainer() {
    const [noteData, setNoteData] = useState([])
    const [filteredNoteData, setFilteredNoteData] = useState([])
    const [selectedNote, setSelectedNote] = useState([])
    const [editState, setEditState] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/notes')
        .then(res => res.json())
        .then(data => {
            setNoteData(data)
            setFilteredNoteData(data)
        })
    },[])

    let clickSideNote = (target) => {
        setSelectedNote(target)
    }

    let handleFilter = (targetValue) => {
        setFilteredNoteData(noteData.filter(note => note.title.toLowerCase().includes(targetValue.toLowerCase())))
    }


    return (
    <>
        <Search handleFilter={handleFilter}/>
        <div className="container">
            <Sidebar 
                setEditState={setEditState}
                filteredNoteData={filteredNoteData} 
                setFilteredNoteData={setFilteredNoteData} 
                clickSideNote={clickSideNote}
            />
            <Content 
                editState={editState}
                setEditState={setEditState}
                selectedNote={selectedNote} 
                setSelectedNote={setSelectedNote}
                filteredNoteData={filteredNoteData}
                setFilteredNoteData={setFilteredNoteData} 

            />
        </div>
    </>
    );
}

export default NoteContainer;
