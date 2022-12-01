import React from 'react';
import ToDo from '../ToDo/ToDo';

// Class Component - ToDoList
class ToDoList extends React.Component {
    render = () =>
        <div>
            <p class="lead">To Do List:</p>
            <ul class="list-group">
                { this.props.toDoList.map(todo => <ToDo key={todo.id} todo={todo} />) }
            </ul>
            
        </div>;
};

export default ToDoList;