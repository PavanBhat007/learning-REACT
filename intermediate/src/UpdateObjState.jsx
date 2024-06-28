import React, { useState } from 'react'

export default function UpdateObjState() {
    const [car, setCar] = useState({year: 2024, 
                                    make: "Ford", 
                                    model: "Mustang"});
    
    
    function handleYearChange(e) {
        // setCar({year: 2025}); // complete obj itself gets replaced
        
        // for this we shall make use of the spread (...) operator
        // the ... operator essentially "spreads" the object
        // i.e., ...car => {year: 2024, make: "Ford", model: "Mustang"}
        // so the setCar({...car, year: 2025}) becomes,
        // setCar({year: 2024, make: "Ford", model: "Mustang", year: 2025})
        // in JS, if an object has duplicate properties, the latter one is taken
        // so it essentially becomes: {year: 2025, make: "Ford", model: "Mustang"}
        setCar(prevCar => ({...prevCar, year: e.target.value}));

        // also we have used updater function in setCar()
        // so it uses the previous state of car (prevCar)

        /*
            NOTE:
            setState(prev => {...prev, prop: value});
            above statement will not work as JS thinks the object parantheses
            are for multi-line i.e., it is for the function, so to escape that
            we must add brackets enclosing the object like so,
            setState(prev => ({...prev, prop: value}));
        */
    }
    
    function handleMakeChange(e) {
        setCar(prevCar => ({...prevCar, make: e.target.value}));
    }
    
    function handleModelChange(e) {
        setCar(prevCar => ({...prevCar, model: e.target.value}));
    }

    return (
        <div>
            <p>Your Favourite car is: {car.year} {car.make} {car.model}</p>
            <input onChange={handleYearChange} type="number" value={car.year} /><br/>
            <input onChange={handleMakeChange} type="text" value={car.make} /><br/>
            <input onChange={handleModelChange} type="text" value={car.model} /><br/>
        </div>
    )

}
