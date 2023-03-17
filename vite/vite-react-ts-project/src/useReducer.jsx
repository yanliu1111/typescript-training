// Description: Reducer Test

import { useReducer } from "react";

function reducer(state, action) {
  const { type, nextName } = action;
  switch (type) {
    case "Add":
      return { ...state, age: state.age + 1 };

    case "Name":
      return { ...state, name: nextName };
  }

  throw new Error("unknown action: " + action.type);
}

export default function ReducerTest() {
  const [state, dispatch] = useReducer(reducer, { name: "John", age: 20 });
  function handleInputChanged(e) {
    dispatch({ type: "Name", nextName: e.target.value });
  }
  function handleAdd() {
    dispatch({ type: "Add" });
  }
  const { name, age } = state;
  return (
    <>
      <input value={name} onChange={handleInputChanged} />
      <br />
      <button onClick={handleAdd}>Add</button>
      <p>
        {name} is {age} years old.
      </p>
    </>
  );
}
