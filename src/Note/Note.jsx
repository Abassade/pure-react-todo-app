import React, { Component } from 'react';
import './Note.css';
import moment from 'moment';
import propTypes from 'prop-types';

class Note extends Component {
    constructor(props){
      super(props);
      this.noteContent = props.noteContent;
      this.noteID = props.noteID;
    }
    render(){

      return(
        <div className="note fade-in">
        <small className="dateInstance">{moment().fromNow()}</small>
          <p className="noteContent">{this.noteContent}</p>
        </div>
      );
    }
  
}

Note.propTypes = {
  noteContent: propTypes.string
}

export default Note;
