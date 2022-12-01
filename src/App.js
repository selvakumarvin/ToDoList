import React, { useState } from 'react';
import data from "./data/data.json";

import Header from "./Header";
import ToDoList from "./components/ToDoList/ToDoList";
import ToDoForm from './ToDoForm';

// Functional Component - App
function App() {
  
    // userState
    const [ toDoList, setToDoList ] = useState(data);

    const addTask = (userInput ) => {
        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
        setToDoList(copy);
    }

    return (
        <div className="App">
            <Header />
            <div className="container">
                <div className="row gx-5">
                    <div className="col">
                        <div class="p-3 border bg-light">
                            <ToDoForm addTask={addTask}/>
                        </div>
                    </div>
                    <div className="col">
                        <div class="p-3 border bg-light">
                            <ToDoList toDoList={toDoList} />
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}

export default App;
