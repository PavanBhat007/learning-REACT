/*
PROPS => <Component key=value />
read-only properties that are shared b/w components
A perent component can send data to a child component
*/

/*
PROPTYPES => age: PropTypes.number
a mechanism that ensures that the passed value is 
of the correct data type
*/

/*
DEFAULT PROPS => default values for props, if nothing
is passed from the parent component
Ex:    name: "Guest"
*/

import './index.css'
import Card from "./components/Card"
import Student from "./components/Student"
import UserGreeting from './components/UserGreeting'
import List from './components/List'
import Button from './components/Button'
import ProfilePicture from './components/ProfilePicture'

function App() {
  // return (
  //   <>
  //     {/* <Card /> */}
  //     <Student name="Pavan" age={21} isStudent={true}/>
  //     <Student name="Navap" age={30} isStudent={false}/>
  //     <Student name="Vapan" age={55} isStudent={false}/>
      
  //     {/* using default props => whatever not passed, 
  //     a default value is used */}
  //     <Student /> 
  //   </>
  // )


  // // CONDITIONAL RENDERING
  // return (
  //   <>
  //   <UserGreeting isLoggedIn={true} username="Pavan Bhat" />
  //   {/* <UserGreeting isLoggedIn={false} username="Pavan Bhat" /> */}
  //   </>
  // )

  // // RENDERING LISTS
  // return (
  //   <List />
  // )

  // const fruits = [
  //   {id: 1, name: "apple", calories: 95}, 
  //   {id: 2, name: "orange", calories: 45}, 
  //   {id: 3, name: "banana", calories: 105}, 
  //   {id: 4, name: "coconut", calories: 159}, 
  //   {id: 5, name: "pineapple", calories: 37}
  // ];

  // const vegetables = [
  //   {id: 6, name: "potatoes", calories: 110}, 
  //   {id: 7, name: "celery", calories: 15}, 
  //   {id: 8, name: "carrots", calories: 25}, 
  //   {id: 9, name: "corn", calories: 63}, 
  //   {id: 10, name: "broccoli", calories: 50}
  // ];

  // return(
  //   <>
  //   {/* {T/F && always T}  */}
  //   {fruits.length > 0 && <List items={fruits} category="Fruits" />}
  //   {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
  //   </>
  // );

  /*
    CLICK EVENTS -> an interaction when a user clicks on a specific element
                    We can respond to clicks by passing a callback to the
                    onClick event handler
  */

  // return <Button />
  return <ProfilePicture />
}

export default App
