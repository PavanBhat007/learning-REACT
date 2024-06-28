/*
    useState() re-renders the component with every state update

    useRef() hook => use reference hook
    Does not cause re-render when state value changes
    When required that a component must "remember" some information
    but should not trigger new renders

    useRef() returns a "ref object" with a single "current" property
    initially set to the initial value provided

    USES
    1. Accessing/Interacting with DOM elements
    2. Handling Focus, Animations, and Transitions
    3. Managing Timers and Intervals
*/

import React, { useState, useEffect, useRef } from 'react'

export default function UseRefHook() {
    // // using useState()
    // let [number, setNumber] = useState(0);


    // // component is being re-rendered every time setNumber() called
    // // because setState() always re-renders on state updates
    // useEffect(() => {
    //     // printed everytime button clicked
    //     console.log("COMPONENT RENDERED");
    // })


    // function handleClick() {
    //     setNumber(prevNum => prevNum+1)
    //     // component re-rendered
    // }

    const ref = useRef(0);

    // component renders only once (strict mode off)
    useEffect(() => {
        console.log("COMPONENT RENDERED");
    })

    function handleClick() {
        ref.current++; // does not re-render component
        console.log(ref.current);
    }


    return (
        <button onClick={handleClick}>
            Click Me!
        </button>
    );
}
