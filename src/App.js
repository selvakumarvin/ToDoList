import React, { useState } from 'react';
import data from "./data/data.json";

import Header from "./Header";
import ToDoList from "./components/ToDoList/ToDoList";
import ToDoForm from './components/ToDoForm/ToDoForm';

// Functional Component - App
function App() {
  
    // userState
    const [ toDoList, setToDoList ] = useState(data);

    const addTask = (userInput, userDate, userTime ) => {
        console.log('App: addTask');
        console.log(userInput, userDate, userTime);
        let prevToDoList = [...toDoList];
        let curToDoList = [...prevToDoList, { id: toDoList.length + 1, task: userInput, date: userDate, time: userTime}];
        setToDoList(curToDoList);
    }

    return (
        <div className="App">
            <Header />
            <div className="container">
                <div className="row gx-5">
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <ToDoForm addTask={addTask}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                            <ToDoList toDoList={toDoList} />
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}

export default App;
