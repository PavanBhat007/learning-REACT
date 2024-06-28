/*
    useEffect()
    React hook that tells React to execute some code when:
    1. component re-renders,
    2. component mounts or (when component appended to DOM)
    3. state of a value changes

    useEffect(function, [dependencies])

    1. useEffect(() => {})           // runs after every re-render
    2. useEffect(() => {}, [])       // runs only on mount
    3. useEffect(() => {}, [value])  // runs on mount + value change

    USES
    -> event listeners
    -> DOM manipulation
    -> subscriptions (real-time updates)
    -> fetching data from API
    -> clean up when component unmounts
*/

import React, {useState, useEffect} from 'react'

export default function UseEffectHook() {
  
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // // runs everytime the component re-renders
    // useEffect(() => {
    //     // since the addCount() uses a setter and updates state variable
    //     // the component is automatically re-rendered which will
    //     // execute this code as it runs on every re-render
    //     document.title = `Count: ${count}`;

    //     // title changes everytime add button pressed i.e.,
    //     // every time setCount is executed
    // });

    // // runs only when component mounted (when component added to DOM)
    // useEffect(() => {
    //     // when component is mounted, this will run changing the title
    //     // initially count=0, so th title will be "Count: 0"
    //     document.title = `Count: ${count}`;

    //     // title does not change for every add button click i.e,
    //     // it remains as "Count: 0" even when the count value changes
    // }, []); // empty array for dependencies

    // runs everytime the component re-renders
    useEffect(() => {
        // this will run when component mounts and also when
        // the dependency's (count) value  i.e., it will run when
        // component mounted and count value is updated
        document.title = `Count: ${count} ${color}`;

        // title changes everytime add button pressed i.e.,
        // every time setCount is executed and also initially when
        // component is added to the DOM
    }, [count]);

    // since color is not in the dependency array, the color changes 
    // wont execute the useEffect() function so even if the color is
    // changed to red the title will still show green
    // so this is "count"-specific

    /*
        NOTE
        The first method and the 3rd method produce same result here, but
        the third method is meant for dependency specific changes i.e., it
        runs only when the count variable is updated, whereas the first
        method will run for any update/re-render in the component.
    */

    function addCount() {
        setCount(prevCount => prevCount + 1);
    }
    
    function subtractCount() {
        setCount(prevCount => prevCount - 1);
    }

    function changeColor() {
        setColor(prevColor => prevColor === "green" ? "red" : "green");
    }

    return (<>
        <p style={{color: color}} >Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <br/>
        <button onClick={changeColor} >Change Color</button>
    </>)
}
