import React, { Component } from 'react';
import './App.css';
import {DB_CONFIG} from './Config/config';
import firebase from 'firebase/app';
import  'firebase/database';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';

class App extends Component {
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);

     this.app = firebase.initializeApp(DB_CONFIG);
     this.db = this.app.database().ref().child('notes');

    this.state = {
      notes:[]
    }
  }

  componentWillMount(){
    const previousNotes = this.state.notes;
    this.database.on('child_added', snap=>{
      previousNotes.push({
        id:snap.key,
        noteContent: snap.val().noteContent
      })
      this.setState({
        notes:previousNotes
      })
    })
  }

  addNote(note){
    this.db.push().set({noteContent: note})
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">Abass Todo App ({this.state.notes.length})</div>
        </div>
        <div className="note-body">
          {
            this.state.notes.map( note=> <Note noteContent={note.content} noteID={note.id} key={note.id}/>)
          }
        </div>
        <div className="notesFooter">
          <NoteForm addNote={this.addNote}/>
        </div>
      </div>
    );
  }
}

export default App;
