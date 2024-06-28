/*
    useContext() hook
    React hook the allows to share values between multiple
    levels of components without passing props through
    each level of that component

    PROVIDER COMPONENT -> component with the data
    1. import {createContext} from 'react';
    2. expoert const myContext = createContext();
    3. <MyContext.Provider value={value}>
            <Child />
       </MyContext.Provider>

    CONSUMER COMPONENT -> component that needs the data
    1. import React, {useContext} from 'react';
    2. import {MyContext} from "./ComponentA";
    3. const value = useContext(MyContext);

    There can be more than 1 consumer components
*/


import React from 'react'
import ComponentA from './components/ComponentA'

export default function UseContextHook() {
  return (
    <div>
      <ComponentA />;
    </div>
  )
}
