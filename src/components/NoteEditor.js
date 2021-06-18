import { React, useState } from "react";

function NoteEditor({ selectedNote, setSelectedNote, setEditState, filteredNoteData, setFilteredNoteData }) {
    const [titleState, setTitleState] = useState(selectedNote.title)
    const [bodyState, setBodyState] = useState(selectedNote.body)
    const [submitForm, setSubmitForm] = useState({
        'title': selectedNote.title,
        'body': selectedNote.body, 
        'date_created': selectedNote.date_created,
        'date_edited' : ""
    })

    let todaysDate = new Date()

    let handleTitle = (e) => {
        setTitleState(e.target.value)
        setSubmitForm({
            ...submitForm, 
            [e.target.name] : e.target.value,
            date_edited: todaysDate.toDateString()
        })
    }

    let handleBody = (e) => {
        setBodyState(e.target.value)
        setSubmitForm({
            ...submitForm, 
            [e.target.name] : e.target.value,
            date_edited: todaysDate.toDateString()
        })
    }

    let handleClick = () => {
        setEditState(false)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log('this is working')
        if(submitForm.title===""){
            alert('Empty Inputs! Please submit Title')
        } else if (submitForm.body===""){
            alert('Empty Inputs! Please submit body')
        } else {
            fetch(`http://localhost:3000/notes/${selectedNote.id}`, {
            method: 'PATCH',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(submitForm)
            })
            .then(res => res.json())
            .then(data => {
                let updatedArray = filteredNoteData.map(note => {
                    console.log(note.id)
                    if (selectedNote.id === note.id) {
                        return ({...note, title: titleState, body: bodyState, date_edited: todaysDate.toDateString()})
                    } else {
                        return note
                    }
                })
                setSelectedNote(submitForm)
                setFilteredNoteData(updatedArray)
            })
            document.querySelector('.note-editor').reset()
        }
        setEditState(false)
    }

    return (
    <form className="note-editor" onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleTitle} value={titleState}/>
        <textarea name="body" onChange={handleBody} value={bodyState}/>
        <div className="button-row">
            <input className="button" type="submit" value="Save"/>
            <button type="button" onClick={() => handleClick()}>Cancel</button>
        </div>
    </form>
  );
}

export default NoteEditor;
