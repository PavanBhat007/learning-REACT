import React from 'react';
import ComponentC from './ComponentC';

// // using just props
// export default function ComponentB(props) {
//   return (
//     <div className='box'>
//       <h1>Component B</h1>
//       <ComponentC user={props.user} />
//     </div>
//   );
// }

export default function ComponentB() {
  return (
    <div className='box'>
      <h1>Component B</h1>
      <ComponentC />
    </div>
  );
}

