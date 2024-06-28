import React, {useState} from 'react';

function OnClickComponent() {
    
    // creating a stateful variables
    // useState() returns a variable and a setter function
    // we use array de-structuring to initialize those
    // common convention is to name setter function with
    // name of stateful variables prefixed with "set"
    // also, we can pass in a initial state or value for the variable
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        // name = "Zoro"; // this won't work
        // if logged in console, name' svalue will change
        // but it won't be reflected in the Virtual DOM

        // we have to use the setter function setName()
        // this is because, when the stateful variable gets updated
        // via the setter function, it triggeres a re-render of the DOM
        setName("Zoro");
    }

    const incrementAge = () => setAge(age + 1);

    const toggleEmployment = () => setIsEmployed(!isEmployed);

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment age</button>

            <p>Employment Status: {
                isEmployed ? "Employed" : "Unemployed"
            }</p>
            <button onClick={toggleEmployment}>Toggle Employment Status</button>
        </div>
    )
}

export default OnClickComponent;