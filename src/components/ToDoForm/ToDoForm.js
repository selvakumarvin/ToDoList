import React, { useState } from 'react';

// Functional Component - ToDoForm
const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('Testing Task');
    const [ userDate, setUserDate ] = useState('');
    const [ userTime, setUserTime ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleDateChange = (e) => {
        setUserDate(e.currentTarget.value);
    }

    const handleTimeChange = (e) => {
        setUserTime(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput, userDate, userTime);
        setUserInput("");
    }

    return (
        <div>
            <p className="lead">ToDo List Form:</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Task</label>
                    <input type="text" className="form-control" id="task" value={userInput} onChange={handleChange}/>
                </div>

                <div className="mb-3">
                    <input type="date" className="form-control" id="date"  value={userDate} onChange={handleDateChange} />
                </div>

                <div className="mb-3">
                    <input type="time" className="form-control" id="time" value={userTime} onChange={handleTimeChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
    );
};

export default ToDoForm;