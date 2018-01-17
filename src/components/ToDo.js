import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
        <button type="delete" value="Delete" onClick={ this.props.deleteToDo }>Delete</button>
      </li>
    );
  }
}

export default ToDo;
