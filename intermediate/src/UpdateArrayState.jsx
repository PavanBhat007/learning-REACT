import React, { useState } from 'react'

export default function UpdateArrayState() {
    const [foods, setFoods] = useState(["Gobi", "Fried Rice", "Masala Dosa"]);

    function handleAddFood() {
        const newFood = document.getElementById("food-input").value;
        document.getElementById("food-input").value = ""; // reset field

        // setFoods([newFood]); // replaces entire array with newFood
        // so we need to retain the previous array values, and this also uses
        // the spread(...) operator i.e.,
        // setFoods([...foods, newFood]) which essentially is
        // setFoods(["Gobi", "Fried Rice", "Masala Dosa", newFood])
        // we will use an updater function with the setFoods()
        setFoods(prevFoods => [...prevFoods, newFood]);
    }

    function handleRemoveFood(index) {
        // filter method gives us an "element" and an "index" to work with
        // filter((ele, i) => {...}) is the syntax
        // however as we are not using the element here, we use "_" in its place
        // in the arrow function, we are filtering out those elements only whose
        // index is not same as the passed index, so the element that would
        // eventually break the condition i.e., the index of ele = passed index
        // will not be included in the returned array
        setFoods(foods.filter((_, ind) => ind !== index));
    }

    return (
        <div>
            <h2>List of Foods</h2>
            <ul>
                {/* displaying an array */}
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
            </ul>
            <input type="text" id="food-input" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add food</button>
        </div>
    )
}
