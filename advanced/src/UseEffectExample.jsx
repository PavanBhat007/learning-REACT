import React from 'react'
import { useState, useEffect } from 'react'

export default function UseEffectExample() {
    
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // // this is a method to achive the functionality needed
    // // but it adds an event listener for every re-render i.e.,
    // // every time window is resized, new event listener is added
    // window.addEventListener("resize", handleResize);
    // console.log("EVENT LISTENER ADDED");

    // we need to add just 1 event listener whent eh component mounts
    // because JS strict mode is on, it runs it twice but thats it
    // JS Strict mode runs once for development and another time 
    // for a cleanup cycle, so 2 event listeners were added
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        // cleanup performed either before next re-render or
        // before the component unmounts (removed from DOM)
        // works only when there are no dependencies given
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    /* THERE CAN BE MORE THAN 1 useEffect() IN A COMPONENT */
    useEffect(() => {
        document.title = `Size: ${width}x${height}`;
    }, [width, height]);

    // when we manually resize window, the width, height changes
    function handleResize() {
        setWidth(window.innerWidth);
        setWidth(window.innerHeight);
    }

    return (<>
        <p>Window Width: {width}</p>
        <p>Window Height: {height}</p>
    </>)
}
