import React from 'react'
import PropTypes from 'prop-types'

// props -> JS object
function Student(props) {
  return (
    <div className='student'>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "YES" : "NO"}</p>
    </div>
  )
}

// defining the data-types of the props
// if invalid data passed: gives warning in console
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false
}

export default Student;
