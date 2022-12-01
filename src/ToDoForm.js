import React, { useState } from 'react';

// Functional Component - ToDoForm
const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    return (
        <div>
            <p class="lead">ToDo List Form:</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Task</label>
                    <input type="text" className="form-control" id="task" value={userInput} onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
    );
};

export default ToDoForm;