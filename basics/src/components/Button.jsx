import React from 'react'

export default function Button() {

    const handleClick = () => console.log("Ouch!");
    const handleClick2 = (name) => console.log(`${name} stop clicking me!`);

    let count = 0;
    const handleClick3 = (name) => {
        if(count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} times`);
        } else {
            console.log(`${name} stop clicking me!`);
        }
    }

    // withe event handling function, we have access to an "event" obj
    // conventionally the parameter is written as just "e" also
    // it's type is "SyntheticBaseEvent" and has a bunch of properties
    const handleClick4 = (event) => event.target.textContent = "OUCH!";

    return (
        // adding parantheses will immediately call the function
        // i.e., before click itself the function gets called
        // so passing arguments this way won't work
        //<button onClick={handleClick2("Bro")}> Click me ! </button>
        
        // // making the onClick handler an arrow function and
        // // calling the actual handler function within the arrow function
        // <button 
        //     onClick={() => handleClick2("Bro")}> 
        //     Click me ! 
        // </button>

        // <button onClick={(e) => handleClick4(e)}> Click me ! </button>

        // There is also the onDoubleClick handler that fires on a double-click
        <button onDoubleClick={(e) => handleClick4(e)}> Click me ! </button>
    )
}
