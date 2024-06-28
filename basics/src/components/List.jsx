import PropTypes from 'prop-types'

function List(props) {
    // // // each row in list must have a unique key
    // // const fruits = [
    // //     {id: 1, name: "apple", calories: 95}, 
    // //     {id: 2, name: "orange", calories: 45}, 
    // //     {id: 3, name: "banana", calories: 105}, 
    // //     {id: 4, name: "coconut", calories: 159}, 
    // //     {id: 5, name: "pineapple", calories: 37}
    // // ];

    // // Sorting fruits list by name
    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    // // fruits.sort((a, b) => b.name.localeCompare(a.name));

    // // Sorting fruits list by calories
    // fruits.sort((a, b) => a.calories - b.calories);
    // // fruits.sort((a, b) => b.calories - a.calories);


    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //                                          { fruit.name }: &nbsp;
    //                                          <b>{fruit.calories}</b>
    //                                      </li>);
    


    // // // Filtering fruits list based on calories
    // // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    // // // const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
    // // //                                                         { lowCalFruit.name }: &nbsp;
    // // //                                                         <b>{ lowCalFruit.calories }</b>
    // // //                                                     </li>);
    // // const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
    // //                                                         { highCalFruit.name }: &nbsp;
    // //                                                         <b>{ highCalFruit.calories }</b>
    // //                                                     </li>);
    

    const category = props.category;
    const itemList = props.items;
    const listItems = itemList.map(fruit => <li key={fruit.id}>
                                             { fruit.name }: &nbsp;
                                             <b>{fruit.calories}</b>
                                         </li>);
    
    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{ listItems }</ul>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number}))
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List;