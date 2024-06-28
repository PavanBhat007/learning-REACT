/*
    Updater Functions
    A function passed as an argument to setState() usually
    Allows for safe updates based on previous state
    Used with multiple state updates and asynchronous functions
    Good practice
*/

import React, {useState} from 'react'

export default function UpdaterFuncExample() {

    const [count, setCount] = useState(0);

    const increment = () => {

        // if i want to increment count by 1, but thrice
        // this way won't work, because,

        // // uses the CURRENT state to calculate NEXT state
        // // set functions do not trigger an update
        // // React batches together state updates for performance
        // // NEXT state becomes CURRENT state afetr an update
        // setCount(count+1); // not updated => 0+1 
        // // count = 0
        // setCount(count+1); // not updated => 0+1
        // // count = 0
        // setCount(count+1); // updates after this => 0+1
        // // count = 1

        // so we need to use arrow functions whithin setState()
        // this arrow function -> updater function
        // this works because,
        // takes PENDING state to calculate NEXT state
        // React puts the updater function in a queue (FIFO)
        // during next render, it will call them in same order
        setCount(c => c+1); // either first letter of state var
        setCount(prevCount => prevCount+1) // or prev___

        // so while using multiple state updates, updater functions
        // are to be used, and it is a good practice to use them
        // if if we are updating just once, as it will future proof
        // the code if need more state updates in future
        
    }
    
    const decrement = () => setCount(c => c-1);

    // in reset() we are just assigning 0 to count
    // it doesn't depend on previous state and hence it is okay
    // to just pass 0 directly to setCount() here
    const reset = () => setCount(0);

    return (
        <div>
            <p>Count: {count}</p>

            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
