import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newNoteContent: ''
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);

    }

    handleUserInput(event){
        this.setState({
            newNoteContent: event.target.value
        });
    }
    writeNote(){
        this.props.addNote(this.state.newNoteContent);

        this.setState({
            newNoteContent: ''
        });
    }
    
    render(){
        return(
            <div className="formWrapper">
                <input className="noteInput"
                 placeholder="Write some notes here..."
                 value={this.state.newNoteContent}
                 onChange={this.handleUserInput}
                 />
                <button className="noteButton" type="submit" onClick={this.writeNote}>Add Note</button>
            </div>
        );
    }
}

export default NoteForm
