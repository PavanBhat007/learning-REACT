import React, { useState, useEffect, useRef } from 'react'

export default function UseRefHook() {

    // useRef() is most useful to reference HTML elements, because
    // small changes in HTML elements must not trigger re-render evey time
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    // when the value in input field changes, it will not re-render
    // because it is part of a ref object now i.e., if we console log the ref obj,
    // 🔽 Object
    //   🔽 current: input
    //          value: (...)
    //          ... (properties of the HTML input element)
    useEffect(() => {
        console.log("COMPONENT RENDERED");
    })

    function handleClick1() {
        // corresponding input element will get focus when button clicked
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2() {
        // corresponding input element will get focus when button clicked
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3() {
        // corresponding input element will get focus when button clicked
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    // the ref attibute of input field takes in the ref-variable
    return (
        <div>
            <button onClick={handleClick1}>Click Me 1!</button>
            <input ref={inputRef1} />

            <br/>

            <button onClick={handleClick2}>Click Me 2!</button>
            <input ref={inputRef2} />

            <br/>

            <button onClick={handleClick3}>Click Me 3!</button>
            <input ref={inputRef3} />
        </div>
    );
}
