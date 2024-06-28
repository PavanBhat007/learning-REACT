import ComponentD from './ComponentD';
import React, { useContext } from 'react';
import { UserContext } from './ComponentA';

// // using just props
// export default function ComponentC(props) {
//   return (
//     <div className='box'>
//       <h1>Component C</h1>
//       <ComponentD user={props.user} />
//     </div>
//   );
// }

export default function ComponentC() {

  const user = useContext(UserContext);

  return (
    <div className='box'>
      <h1>Component C</h1>
      <h2>{`Hello again! ${user}`}</h2>
      <ComponentD />
    </div>
  );
}
