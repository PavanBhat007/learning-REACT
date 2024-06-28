import React, { useContext } from 'react';
import { UserContext } from './ComponentA';

// using just props
// export default function ComponentD(props) {
//   // if we need to acces the user state variable of ComponentA here
//   // we'll have to pass it down through props from each component
//   // so A will pass to B, B to C, C to D, this will become tedious
//   // this is called as "Prop Drilling"

//   return (
//     <div className='box'>
//       <h1>Component D</h1>
//       <h2>{`Bye ${props.user}`}</h2>
//     </div>
//   )
// }

export default function ComponentD() {
  const user = useContext(UserContext);

  return (
    <div className='box'>
      <h1>Component D</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
}