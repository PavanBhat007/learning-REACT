import React from 'react';
import ComponentB from './ComponentB';
import { useState, createContext } from 'react';

export const UserContext = createContext();

export default function ComponentA() {
    const [user, setUser] = useState("Pavan");

    return (
        <div className='box'>
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>

            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
        </div>
    );
}
