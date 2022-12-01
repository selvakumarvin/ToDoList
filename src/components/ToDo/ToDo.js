import React from 'react';

// Class Component - To Do
class ToDo extends React.Component {
    render = () => <>
        <li class="list-group-item"
            id={this.props.todo.id} 
            key={this.props.todo.id + this.props.todo.task} 
            name="todo" 
            value={this.props.todo.id}>{this.props.todo.task}</li>
    </>
}

export default ToDo;