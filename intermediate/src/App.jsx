/*
  REACT HOOKS
  Special functions that allow functional components to use
  React features without writing class components
  (useState, useEffect, useContext, useCallback, ...)
*/

/*
  useState() hook
  A react hook that allows the creation of a stateful variable
  and a setter function to update it's value in the Virtual DOM
  syntax: [name, setName] = useState("");
*/

import OnClickComponent from "./onClickExample";
import Counter from "./Counter";
import OnChangeExample from "./onChangeExample";
import ColourPicker from "./ColourPicker";
import UpdaterFuncExample from "./UpdaterFuncExample";
import UpdateObjState from "./UpdateObjState";
import UpdateArrayState from "./UpdateArrayState";
import UpdateArrOfObjState from "./UpdateArrOfObjState";

function App() {
  // return <OnClickComponent />;
  // return <Counter />;
  // return <OnChangeExample />;
  // return <ColourPicker />;
  // return <UpdaterFuncExample />;
  // return <UpdateObjState />;
  // return <UpdateArrayState />;
  return <UpdateArrOfObjState />;
}

export default App;