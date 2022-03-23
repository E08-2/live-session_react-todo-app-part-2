import React, { useState } from "react";
import Button from "./components/Button";
import ToDoList from "./components/ToDoList";
import "./App.css";

const App = () => {
    const [ currentId, setCurrentId ] = useState(1);
    // Create a state variable to store the to-do strings the user has already created
    const [ toDos, setToDos ] = useState([]);
    // Create another state variable to track what the user types in the input before they click the button to make a new to-do string
    const [ currentToDo, setCurrentToDo ] = useState({text: "", id: currentId});
    
    // A function to update the currentToDo variable every time something changes inside the input
    const updateCurrentToDo = event => {
        setCurrentToDo({text: event.target.value, id: currentId});
    }

    // Create a new to-do string and add it to the UI when the button is clicked
    const addNewToDo = () => {
        // Make sure the user has typed something before creating a new to-do string
        if (currentToDo.text.length > 0) {
            // Option 1: Spread operator
            setToDos([...toDos, currentToDo]);
            
            // Option 2: Concat
            // ? setToDos(toDos.concat(currentToDo));

            // Add 1 to currentId 
            setCurrentId(currentId + 1);

            // Then reset the value of the "currentToDo" state variable to an empty string, ready for the user to type a new to-do string
            setCurrentToDo({text: "", id: currentId});
        } else {
            alert("Please type something before trying to create a new to-do!");
        }
    }
    
    return (
        <>
            <h1>TODO APP</h1>
            {/* Note: this input's value is controlled by state! */}
            <input onChange={updateCurrentToDo} value={currentToDo.text} placeholder="Add a new To-Do!" />

            {/* Click the button to add a new to-do string to the "toDos" array */}
            <Button updateToDos={addNewToDo} />

            <h2>TO-DO</h2>

            {/* Render each of the user's current to-do strings in JSX inside the <NodeList /> component */}
            <ToDoList data={toDos} />
        </>
    );
}

export default App;